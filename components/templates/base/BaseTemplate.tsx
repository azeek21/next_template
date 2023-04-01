import { PropsWithChildren } from "react";
import styles from "./BaseTemplate.module.css";

export interface IBaseTemplate extends PropsWithChildren {
  sampleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({
  sampleTextProp,
  children,
}) => {
  return (
    <div className={styles.template}>
      <h1>{sampleTextProp}</h1>
      {children}
    </div>
  );
};

export default BaseTemplate;
