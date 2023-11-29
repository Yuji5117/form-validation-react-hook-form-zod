import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form/Form";
import { InputFiled } from "./components/Input/InputFiled";
import { z } from "zod";

const FormDataSchema = z.object({
  name: z.string().min(1, { message: "必須項目です。" }),
  email: z
    .string()
    .min(1, { message: "必須項目です。" })
    .email({ message: "無効なメールアドレスです。" }),
});

type FormData = z.infer<typeof FormDataSchema>;

function App() {
  const [formData, setFormData] = useState<FormData>({ name: "", email: "" });
  const onSubmit = (data: FormData) => {
    try {
      const ok = FormDataSchema.parse(data);
      setFormData(ok);
    } catch (e) {
      console.error(e);
    }
  };
  return (
    <div className="app">
      <div className="container">
        <h2>Form Validation</h2>
        <Form<FormData>
          onSubmit={(data) => onSubmit(data)}
          schema={FormDataSchema}
        >
          {({ register, formState }) => (
            <>
              <InputFiled
                label="名前"
                placeholder="名前を入力してください..."
                error={formState.errors["name"]}
                registration={register("name")}
              />
              <InputFiled
                label="メールアドレス"
                type="email"
                placeholder="メールアドレスを入力してください..."
                error={formState.errors["email"]}
                registration={register("email")}
              />
              <button type="submit">送信</button>
            </>
          )}
        </Form>
        <div>
          <p>
            名前: <span className="text">{formData.name}</span>
          </p>
          <p>
            メールアドレス: <span className="text">{formData.email}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
