import { useState } from "react";

const YOUR_BOT_TOKEN = "7038740534:AAHJ85y5kXoFdEP44nLWccJq2rMaw1AtNqw";
const YOUR_CHAT_ID = "6177885038";

export default function App() {
  const [ism, setIsm] = useState("");
  const [tel, setTel] = useState("");
  const [savol, setSavol] = useState("");
  const [extra, setExtra] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const requestBody = {
      chat_id: YOUR_CHAT_ID,
      text: `Yangi xabar:\nIsm: ${ism}
      \nTelefon: ${tel}
      \nMavzu: ${savol}
      \nXabar: ${extra}`,
    };

    fetch(`https://api.telegram.org/bot${YOUR_BOT_TOKEN}/sendMessage`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(requestBody),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Xatolik yuz berdi");
        }
        return response.json();
      })
      .then((data) => {
        setIsm("");
        setTel("");
        setSavol("");
        setExtra("");
        console.log(data);
      })
      .catch((error) => {
        console.error("Xatolik yuz berdi:", error);
      });
  }
  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ismingiz: <br />
        <input type="text" onChange={(e) => setIsm(e.target.value)} />
      </label>
      <label>
        Telefon raqam: <br />
        <input type="number" placeholder="+998 91 123 45 67" onChange={(e) => setTel(e.target.value)} />
      </label>{" "}
      <label>
        Savolingiz: <br />
        <input type="text" onChange={(e) => setSavol(e.target.value)} />
      </label>
      <label>
        Qoshimcha: <br />
        <input type="text" onChange={(e) => setExtra(e.target.value)} />
      </label>
      <button type="submit">Junatish</button>
    </form>
  );
}
