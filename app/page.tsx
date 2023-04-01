import BaseTemplate from "components/templates/base/BaseTemplate";

export default function Home() {
  const _f = "Hi this is a test";
  return (
    <div>
      <h1>Welcome to home page.</h1>

      <BaseTemplate sampleTextProp="This is sample base template component.">
        <p>
          Go to <code>./components/base/BaseTemplate</code> for more.
        </p>
      </BaseTemplate>
    </div>
  );
}
