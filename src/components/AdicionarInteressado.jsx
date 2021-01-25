import { useState } from "react";
import { Field } from "formik";
import { Button, TextField } from "@material-ui/core";

const AdicionarInteressado = ({
  arrayHelpers,
  errorInteressados,
  touched,
  setFieldTouched,
}) => {
  const [interessado, setInteressado] = useState("");

  const handleChange = (event) => setInteressado(event.target.value);

  const handleClick = () => {
    if (interessado) {
      arrayHelpers.push(interessado);
      setInteressado("");
    } else alert("Preencha o nome do novo interessado.");
  };

  return (
    <div className="adicionar-interessado">
      <Field
        component={TextField}
        fullWidth
        label="Novo Interessado"
        error={touched.interessados && errorInteressados ? true : false}
        helperText={touched.interessados && errorInteressados ? errorInteressados : ""}
        value={interessado}
        onBlur={() => setFieldTouched("interessados")}
        onChange={handleChange}
      />
      <Button
        type="button"
        variant="contained"
        onClick={handleClick}
        style={{ background: "#c4c4c4", color: "#ffffff" }}
        size="small"
        className="button-label"
      >
        ADICIONAR
      </Button>
    </div>
  );
};

export default AdicionarInteressado;
