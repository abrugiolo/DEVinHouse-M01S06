import { useSelector } from "react-redux";
import { Formik, Form, Field, FieldArray } from "formik";
import { selectProcessos } from "../redux/selectors";
import { PROCESSO_VAZIO } from "../uteis/constantes";
import AdicionarInteressado from "../components/AdicionarInteressado";
import { Button, IconButton, List, TextField, Typography } from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";
import * as yup from "yup";

const Cadastro = ({ adicionar, voltar }) => {
  const atual = useSelector(selectProcessos) || {};

  const yupSchema = yup.object().shape({
    assunto: yup.string().required("Preencha o assunto."),
    interessados: yup.array().min(1, "Adicione ao menos uma pessoa."),
    descricao: yup.string().required("Preencha a descrição."),
  });

  return (
    <div className="form-cadastro">
      <Formik
        enableReinitialize
        validadeOnMount={true}
        validationSchema={yupSchema}
        initialValues={atual.id ? atual : PROCESSO_VAZIO}
        onSubmit={(values) => {
          adicionar(values);
        }}
      >
        {({ values, touched, errors, setFieldValue, setFieldTouched }) => (
          <Form>
            <header>
              <Typography variant="subtitle1" className="title">
                {atual.id ? "Editar processo" : "Cadastro de processo"}
              </Typography>

              <IconButton onClick={voltar}>
                <CloseIcon style={{ width: "1.5em", height: "1.5em" }} />
              </IconButton>
            </header>

            <div className="form">
              {atual.id && (
                <>
                  <Field
                    component={TextField}
                    fullWidth
                    label="Número"
                    name="numero"
                    value={values.numero}
                    disabled
                  />

                  <Field
                    component={TextField}
                    fullWidth
                    label="Data"
                    name="entrada"
                    value={values.entrada}
                    disabled
                  />
                </>
              )}

              <Field
                component={TextField}
                fullWidth
                label="Assunto"
                name="assunto"
                error={touched.assunto && errors.assunto ? true : false}
                helperText={touched.assunto && errors.assunto ? errors.assunto : ""}
                value={values.assunto}
                onBlur={() => setFieldTouched("assunto")}
                onChange={(event) => setFieldValue("assunto", event.target.value)}
                className="campo-form"
              />

              <List dense={true}>
                {values.interessados && values.interessados.length > 0 ? (
                  <>
                    <Typography variant="body2">Interessados</Typography>
                    {values.interessados.map((i, index) => (
                      <Typography variant="body1" key={index}>
                        {i}
                      </Typography>
                    ))}
                  </>
                ) : null}
              </List>

              <FieldArray
                name="interessados"
                type="text"
                className="campo-form"
                render={(arrayHelpers) => (
                  <AdicionarInteressado
                    arrayHelpers={arrayHelpers}
                    errorInteressados={errors.interessados}
                    touched={touched}
                    setFieldTouched={setFieldTouched}
                  />
                )}
              />

              <Field
                component={TextField}
                fullWidth
                label="Descrição"
                name="descricao"
                helperText={touched.descricao && errors.descricao ? errors.descricao : ""}
                error={touched.descricao && errors.descricao ? true : false}
                multiline
                rows={3}
                rowsMax={3}
                value={values.descricao}
                onBlur={() => setFieldTouched("descricao")}
                onChange={(event) => setFieldValue("descricao", event.target.value)}
                className="campo-form"
              />
            </div>

            <footer>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="small"
                disabled={atual.id ? true : false}
              >
                SALVAR
              </Button>
            </footer>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Cadastro;
