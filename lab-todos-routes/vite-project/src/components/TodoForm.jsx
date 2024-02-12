import { useFormik } from "formik";
import { object, string, date } from 'yup';

const todoSchema = object({
    task: string().required('Required field'),
    createdAt: date().required(),
    status: string().nullable().required('Required field'),
});

const INITIAL_VALUES = {
    task: '',
    createdAt: '',
    status: '',
};

const TodoForm = ({ onSubmit, initialValues = INITIAL_VALUES }) => {
    const { values, errors, touched, isValid, isSubmitting, setSubmitting, handleChange, handleBlur, handleSubmit, setErrors } = useFormik({
        initialValues: { ...initialValues },
        onSubmit: (values) => {
            setSubmitting(true);

            const data = { ...values };

            onSubmit(data)
                .catch(error => {
                    const errors = error.response.data.errors;

                    setErrors(errors);
                });
        },
        validationSchema: todoSchema,
        validateOnChange: true,
        validateOnBlur: true,
        validateOnMount: true,
    });

    return (
        <form onSubmit={handleSubmit} data-bs-theme="light">
            <div className="mb-3">
                <label htmlFor="task" className="form-label">
                    Task
                </label>
                <input
                    className={`form-control ${errors.task && touched.task ? 'is-invalid' : ''}`}
                    id="task"
                    onChange={handleChange}
                    name="task"
                    value={values.task}
                    onBlur={handleBlur}
                />
                {errors.task && touched.task ? (
                    <div className="invalid-feedback">{errors.task}</div>
                ) : null}
            </div>

            <div className="mb-3">
                <label htmlFor="createdAt" className="form-label">
                    Created At
                </label>
                <input
                    className={`form-control ${errors.createdAt && touched.createdAt ? 'is-invalid' : ''}`}
                    id="createdAt"
                    onChange={handleChange}
                    name="createdAt"
                    value={values.createdAt}
                    onBlur={handleBlur}
                />
                {errors.createdAt && touched.createdAt ? (
                    <div className="invalid-feedback">{errors.createdAt}</div>
                ) : null}
            </div>

            <div className="mb-3">
                <label htmlFor="status" className="form-label">
                    Status
                </label>
                <select
                    className={`form-control ${errors.status && touched.status ? 'is-invalid' : ''}`}
                    id="status"
                    onChange={handleChange}
                    name="status"
                    value={values.status}
                    onBlur={handleBlur}
                >
   <option value="">Selecciona...</option>
    <option value="not done">not done</option>
    <option value="in progress">in progress</option>
    <option value="blocked">blocked</option>
    <option value="done">done</option>

        </select>
                {errors.status && touched.status ? (
                    <div className="invalid-feedback">{errors.status}</div>
                ) : null}
            </div>

            <button disabled={!isValid || isSubmitting} type="submit" className="btn btn-primary">
                {isSubmitting ? <> Creando...</> : 'Enviar'}
            </button>
        </form>
    );
};

export default TodoForm;