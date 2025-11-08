"use client";
import TextInput from "../ui/TextInput";

export default function ContactContent() {
  return (
    <section className="flex flex-col gap-12  items-center  h-full">
      <div data-testid="contact-content-main-container">
        <h1 className="text-4xl font-semibold font-sains text-golden-yellow">
          Contact
        </h1>
      </div>
      <TextInput onChange={() => {}} value="" type="text" name="" />
    </section>
  );
}
