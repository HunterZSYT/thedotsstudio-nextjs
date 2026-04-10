export default function LegacyHtmlPage({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} suppressHydrationWarning />;
}
