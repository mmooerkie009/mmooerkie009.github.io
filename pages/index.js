import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { useEffect,useState } from "react";
import { Router, useRouter } from "next/router";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {

  const [startDate1, setStartDate1] = useState("");
  const [endDate1, setEndDate1] = useState("");

  const [startDate2, setStartDate2] = useState("");
  const [endDate2, setEndDate2] = useState("");

  const [startDate3, setStartDate3] = useState("");
  const [endDate3, setEndDate3] = useState("");
  
  const [startDate4, setStartDate4] = useState("");
  const [endDate4, setEndDate4] = useState("");
  
  const [startDate5, setStartDate5] = useState("");
  const [endDate5, setEndDate5] = useState("");
  
  const [startDate6, setStartDate6] = useState("");
  const [endDate6, setEndDate6] = useState("");
  
  const [startDate7, setStartDate7] = useState("");
  const [endDate7, setEndDate7] = useState("");

  const [startDate8, setStartDate8] = useState("");
  const [endDate8, setEndDate8] = useState("");

  const [startDate9, setStartDate9] = useState("");
  const [endDate9, setEndDate9] = useState("");

  const [startDate10, setStartDate10] = useState("");
  const [endDate10, setEndDate10] = useState("");

  const router = useRouter();

  const box1 = async (e) => {
    e.preventDefault();
    // เตรียมข้อมูลที่จะส่ง
    const data = {
      startDate1,
      endDate1
    };

    // ส่งข้อมูลไปที่ API
    const response = await fetch("http://localhost:3000/api/editbox1", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Data sent successfully!");
    } else {
      alert("Failed to send data.");
    }
  };

  const box2 = async (e) => {
    e.preventDefault();
    // เตรียมข้อมูลที่จะส่ง
    const data = {
      startDate2,
      endDate2
    };

    // ส่งข้อมูลไปที่ API
    const response = await fetch("http://localhost:3000/api/editbox2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Data sent successfully!");
    } else {
      alert("Failed to send data.");
    }
  };
  const box3 = async (e) => {
    e.preventDefault();
    // เตรียมข้อมูลที่จะส่ง
    const data = {
      startDate3,
      endDate3
    };

    // ส่งข้อมูลไปที่ API
    const response = await fetch("http://localhost:3000/api/editbox3", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Data sent successfully!");
    } else {
      alert("Failed to send data.");
    }
  };
  const box4 = async (e) => {
    e.preventDefault();
    // เตรียมข้อมูลที่จะส่ง
    const data = {
      startDate4,
      endDate4
    };

    // ส่งข้อมูลไปที่ API
    const response = await fetch("http://localhost:3000/api/editbox4", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Data sent successfully!");
    } else {
      alert("Failed to send data.");
    }
  };
  const box5 = async (e) => {
    e.preventDefault();
    // เตรียมข้อมูลที่จะส่ง
    const data = {
      startDate5,
      endDate5
    };

    // ส่งข้อมูลไปที่ API
    const response = await fetch("http://localhost:3000/api/editbox5", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Data sent successfully!");
    } else {
      alert("Failed to send data.");
    }
  };
  const box6 = async (e) => {
    e.preventDefault();
    // เตรียมข้อมูลที่จะส่ง
    const data = {
      startDate6,
      endDate6
    };

    // ส่งข้อมูลไปที่ API
    const response = await fetch("http://localhost:3000/api/editbox6", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Data sent successfully!");
    } else {
      alert("Failed to send data.");
    }
  };
  const box7 = async (e) => {
    e.preventDefault();
    // เตรียมข้อมูลที่จะส่ง
    const data = {
      startDate7,
      endDate7
    };

    // ส่งข้อมูลไปที่ API
    const response = await fetch("http://localhost:3000/api/editbox7", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Data sent successfully!");
    } else {
      alert("Failed to send data.");
    }
  };
  const box8 = async (e) => {
    e.preventDefault();
    // เตรียมข้อมูลที่จะส่ง
    const data = {
      startDate8,
      endDate8
    };

    // ส่งข้อมูลไปที่ API
    const response = await fetch("http://localhost:3000/api/editbox8", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Data sent successfully!");
    } else {
      alert("Failed to send data.");
    }
  };
  const box9 = async (e) => {
    e.preventDefault();
    // เตรียมข้อมูลที่จะส่ง
    const data = {
      startDate9,
      endDate9
    };

    // ส่งข้อมูลไปที่ API
    const response = await fetch("http://localhost:3000/api/editbox9", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Data sent successfully!");
    } else {
      alert("Failed to send data.");
    }
  };
  const box10 = async (e) => {
    e.preventDefault();
    // เตรียมข้อมูลที่จะส่ง
    const data = {
      startDate10,
      endDate10
    };

    // ส่งข้อมูลไปที่ API
    const response = await fetch("http://localhost:3000/api/editbox10", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    });

    if (response.ok) {
      alert("Data sent successfully!");
    } else {
      alert("Failed to send data.");
    }
  };

  useEffect(() => {
    // เช็คว่าโค้ดทำงานในฝั่ง client-side
    if (typeof window !== "undefined") {
      const cookie = document.cookie;
      if (!cookie) {
        router.push("/signin");
      } else {
        console.log("Cookies:", cookie);
      }
    }
  }, [router]);

  return (
    <>

      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
        <div class="container">
          
            <label>Box1</label>
          <form onSubmit={box1}>
            <div>
              <label htmlFor="start-date">Start Date:</label>
              <input
                type="datetime-local"
                id="start-date"
                name="start-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={startDate1}
                onChange={(e) => setStartDate1(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="end-date">End Date:</label>
              <input
                type="datetime-local"
                id="end-date"
                name="end-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={endDate1}
                onChange={(e) => setEndDate1(e.target.value)}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
          <br />
          <label>Box2</label>
          <form onSubmit={box2}>
            <div>
              <label htmlFor="start-date">Start Date:</label>
              <input
                type="datetime-local"
                id="start-date"
                name="start-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={startDate2}
                onChange={(e) => setStartDate2(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="end-date">End Date:</label>
              <input
                type="datetime-local"
                id="end-date"
                name="end-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={endDate2}
                onChange={(e) => setEndDate2(e.target.value)}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
          <label>Box3</label>
          <form onSubmit={box3}>
            <div>
              <label htmlFor="start-date">Start Date:</label>
              <input
                type="datetime-local"
                id="start-date"
                name="start-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={startDate3}
                onChange={(e) => setStartDate3(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="end-date">End Date:</label>
              <input
                type="datetime-local"
                id="end-date"
                name="end-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={endDate3}
                onChange={(e) => setEndDate3(e.target.value)}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>
          <label>Box4</label>
          <form onSubmit={box4}>
            <div>
              <label htmlFor="start-date">Start Date:</label>
              <input
                type="datetime-local"
                id="start-date"
                name="start-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={startDate4}
                onChange={(e) => setStartDate4(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="end-date">End Date:</label>
              <input
                type="datetime-local"
                id="end-date"
                name="end-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={endDate4}
                onChange={(e) => setEndDate4(e.target.value)}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>

          <label>Box5</label>
          <form onSubmit={box5}>
            <div>
              <label htmlFor="start-date">Start Date:</label>
              <input
                type="datetime-local"
                id="start-date"
                name="start-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={startDate5}
                onChange={(e) => setStartDate5(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="end-date">End Date:</label>
              <input
                type="datetime-local"
                id="end-date"
                name="end-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={endDate5}
                onChange={(e) => setEndDate5(e.target.value)}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>

          <label>Box6</label>
          <form onSubmit={box6}>
            <div>
              <label htmlFor="start-date">Start Date:</label>
              <input
                type="datetime-local"
                id="start-date"
                name="start-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={startDate6}
                onChange={(e) => setStartDate6(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="end-date">End Date:</label>
              <input
                type="datetime-local"
                id="end-date"
                name="end-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={endDate6}
                onChange={(e) => setEndDate6(e.target.value)}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>

          <label>Box7</label>
          <form onSubmit={box7}>
            <div>
              <label htmlFor="start-date">Start Date:</label>
              <input
                type="datetime-local"
                id="start-date"
                name="start-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={startDate7}
                onChange={(e) => setStartDate7(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="end-date">End Date:</label>
              <input
                type="datetime-local"
                id="end-date"
                name="end-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={endDate7}
                onChange={(e) => setEndDate7(e.target.value)}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>

          <label>Box8</label>
          <form onSubmit={box8}>
            <div>
              <label htmlFor="start-date">Start Date:</label>
              <input
                type="datetime-local"
                id="start-date"
                name="start-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={startDate8}
                onChange={(e) => setStartDate8(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="end-date">End Date:</label>
              <input
                type="datetime-local"
                id="end-date"
                name="end-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={endDate8}
                onChange={(e) => setEndDate8(e.target.value)}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>

          <label>Box9</label>
          <form onSubmit={box9}>
            <div>
              <label htmlFor="start-date">Start Date:</label>
              <input
                type="datetime-local"
                id="start-date"
                name="start-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={startDate9}
                onChange={(e) => setStartDate9(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="end-date">End Date:</label>
              <input
                type="datetime-local"
                id="end-date"
                name="end-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={endDate9}
                onChange={(e) => setEndDate9(e.target.value)}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>

          <label>Box10</label>
          <form onSubmit={box10}>
            <div>
              <label htmlFor="start-date">Start Date:</label>
              <input
                type="datetime-local"
                id="start-date"
                name="start-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={startDate10}
                onChange={(e) => setStartDate10(e.target.value)}
                required
              />
            </div>

            <div>
              <label htmlFor="end-date">End Date:</label>
              <input
                type="datetime-local"
                id="end-date"
                name="end-date"
                min="2023-01-01T00:00"
                max="2024-12-31T23:59"
                value={endDate10}
                onChange={(e) => setEndDate10(e.target.value)}
                required
              />
            </div>

            <button type="submit">Submit</button>
          </form>

          </div>
        </main>
        
      </div>
    </>
  );
}
