import { Field } from "formik";

const LabelField = ({ labelValue, fieldName, disabled }) => {
  return (
    <>
      <label className="subtitle">{labelValue}</label>
      <Field name={fieldName} type="text" disabled={disabled} />
    </>
  );
};

export default LabelField;
