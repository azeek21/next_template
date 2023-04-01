import BaseTemplate from "components/templates/base/BaseTemplate";
import { Metadata } from "next";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1>Welcome to Template home</h1>
      <p>This is my template repo for future nextjs apps.</p>
      <p>
        It comes with pre set-up :<br /> <span>Eslint</span>{" "}
        <span>Prettier</span> <span>Husky</span> <span>Commitlint</span>{" "}
        <span>VS code worpsapce</span> <span>Normalize.css</span>
      </p>

      <BaseTemplate sampleTextProp="This is sample base template component.">
        <p>
          Go to{" "}
          <Link
            target={"_blank"}
            referrerPolicy="no-referrer"
            href={
              "https://github.com/azeek21/next_template/tree/main/components/templates/base"
            }
          >
            <code>./components/base/BaseTemplate</code>
          </Link>{" "}
          for more.
        </p>
      </BaseTemplate>
      <p>
        See{" "}
        <Link
          target={"_blank"}
          referrerPolicy="no-referrer"
          href={"https://github.com/azeek21/next_template"}
        >
          source code
        </Link>{" "}
        for more.
      </p>
    </>
  );
}

export const metadata: Metadata = {
  title: "Template",
  description:
    "Tepmlate for NextJs 13 with typescript, eslint, prettier, husky, commitlint, turbo, turborepo.",
};
