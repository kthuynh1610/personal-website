const stack = [
  { category: 'Languages', items: 'TypeScript · JavaScript · Bash' },
  { category: 'Frontend', items: 'React · Next.js · Redux Toolkit · Tailwind · MUI' },
  { category: 'Backend', items: 'Node.js · NestJS · GraphQL · REST · Redis · Kafka' },
  { category: 'Cloud', items: 'AWS — Lambda · DynamoDB · S3 · SQS · SNS · ECS · CDK · CloudFront · Route 53' },
  { category: 'AI', items: 'OpenAI API · Claude · DeepSeek' },
  { category: 'DevOps', items: 'GitHub Actions · BuildKite · Terraform · CloudFormation · AWS CDK' },
  { category: 'Monitoring', items: 'New Relic · CloudWatch · Raygun' },
]

export default function Stack() {
  return (
    <div>
      <h1>Stack</h1>
      <hr />

      <ul className="stack-list">
        {stack.map((s) => (
          <li key={s.category}>
            <strong>{s.category}</strong>
            <span className="stack-items">{s.items}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
