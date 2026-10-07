// 리서치 에이전트에게 줄 출력 스키마(JSON Schema)를 zod 스키마에서 자동 생성
// 사용법: node scripts/research-schema.mjs  → research/schema.json
import { writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { z } from 'zod'
import { Company, CompanySitesFile } from '../src/data/schema.js'

// 근거 한 건: 데이터의 어느 값을 어떤 출처가 뒷받침하는지
const Claim = z.object({
  id: z.string(),                 // c1, c2 …
  field: z.string(),              // 예: sites[0].buildings[1].phases[2]
  value: z.any(),
  source_url: z.string().url(),
  published: z.string(),          // 출처 게시일 YYYY-MM-DD
  source_tier: z.union([z.literal(1), z.literal(2), z.literal(3)]),
  source_type: z.enum(['sec_filing', 'dart', 'press_release', 'company_site', 'earnings_call', 'gov_permit', 'utility_filing', 'news', 'job_posting', 'social']),
  quote: z.string().max(220),     // 25단어 이내 근거 문장
  verification: z.enum(['confirmed', 'single_source', 'conflict']).optional(),
})

export const Draft = z.object({
  company: Company,               // data/companies.json 에 들어갈 회사 항목
  file: CompanySitesFile,         // data/companies/<id>.json 이 될 내용
  claims: z.array(Claim).min(1),
  open_questions: z.array(z.string()),
})

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  writeFileSync(new URL('../research/schema.json', import.meta.url), JSON.stringify(z.toJSONSchema(Draft, { unrepresentable: 'any' }), null, 2))
  console.log('✅ research/schema.json')
}
