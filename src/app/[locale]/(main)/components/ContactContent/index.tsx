"use client";
import * as z from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import ButtonTemplate from "../ui/Button";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";

const formSchema = z.object({
  fullname: z
    .string({ error: "Por favor, informe o nome completo." })
    .trim()
    .min(1, "Por favor, informe o nome completo.")
    .max(400, "O nome completo é muito longo.")
    .regex(
      /^[a-zA-ZÀ-ÿ\s']+$/,
      "Este campo deve conter apenas letras, acentos e apóstrofos."
    )
    .refine(
      (fullname) => {
        return /^(\S+\s+)+\S+$/.test(fullname);
      },
      { message: "Por favor, informe o nome e sobrenome." }
    ),
  email: z
    .email({
      message: "Formato de e-mail inválido.",
    })
    .min(1, "O e-mail não pode estar vazio."),
  message: z
    .string()
    .trim()
    .min(1, "A mensagem não pode estar vazia.")
    .max(800, "A mensagem deve ter no máximo 800 caracteres."),
});
type FormType = z.infer<typeof formSchema>;

export default function ContactContent() {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<FormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullname: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data: FormType) => {
    try {
      const response = await fetch("/api", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data,
        }),
      });
      //TODO - Criar evento de Toast
      reset();
    } catch (error) {
      //TODO - Criar log

      console.log(error);
    }
  };
  return (
    <section className="flex flex-col gap-24  items-center h-full p-4">
      <div data-testid="contact-content-main-container">
        <h1 className="text-4xl font-semibold font-sains text-golden-yellow">
          Contact
        </h1>
      </div>

      <form
        data-testid="contact-form-main-container"
        className="h-full w-full flex flex-col max-w-[90%] md:max-w-[50%] gap-6"
        onSubmit={handleSubmit(onSubmit)}
      >
        <Controller
          control={control}
          name="fullname"
          render={({ field }) => (
            <div data-testid="contact-fullname-controller">
              <TextInput
                {...field}
                placeholder="*Name"
                type="text"
                value={field.value}
                name={field.name}
                onChange={(event) => {
                  field.onChange(event.target.value);
                }}
                errorMessage={errors.fullname?.message}
              />
            </div>
          )}
        />
        <Controller
          data-testid="contact-email-controller"
          control={control}
          name="email"
          render={({ field }) => (
            <div data-testid="contact-email-controller">
              <TextInput
                {...field}
                placeholder="*Email"
                type="text"
                value={field.value}
                name={field.name}
                onChange={(event) => {
                  field.onChange(event.target.value);
                }}
                errorMessage={errors.email?.message}
              />
            </div>
          )}
        />
        <Controller
          control={control}
          name="message"
          render={({ field }) => (
            <div data-testid="contact-message-controller">
              <TextArea
                {...field}
                placeholder="*Message"
                value={field.value}
                name={field.name}
                onChange={(event) => {
                  field.onChange(event.target.value);
                }}
                errorMessage={errors.message?.message}
              />
              {!errors.message?.message && (
                <p
                  data-testid="contact-message-counter"
                  className={`text-sm ${
                    field?.value?.length >= 800
                      ? "text-red-500"
                      : "text-green-600"
                  }  mt-2`}
                >
                  {field?.value?.length ?? 0}/800 caracteres
                </p>
              )}
            </div>
          )}
        />

        <button
          className="mt-8"
          type="submit"
          data-testid="contact-submit-button"
        >
          <ButtonTemplate title="Send" />
        </button>
      </form>
    </section>
  );
}
