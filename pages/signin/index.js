"use client";
import React, { useState, useEffect } from 'react';
import styles from '@/styles/mystyle.module.css';
import Cookies from 'js-cookie';

const Page = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const getCookie = (name) => {
      const value = `; ${document.cookie}`;
      const parts = value.split(`; ${name}=`);
      if (parts.length === 2) return parts.pop().split(';').shift();
    };
    console.log(document.cookie);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const data = await response.json();
      // ตั้งค่า cookie หรือ token ที่ได้รับ
      console.log(document.cookie);
     window.location.href = "/"; // เปลี่ยนไปยังหน้า home
    } else {
      const data = await response.json();
      setError(data.message); // แสดงข้อความผิดพลาด
    }
  };

  return (
    <center>
      <div className={`${styles.container} hwcenter`} style={{ marginTop: 'auto' }}>
        <div className={styles.card}>
          <h2 className={styles.title}>Sign In</h2>
          {error && <p className={styles.error}>{error}</p>} {/* แสดงข้อความผิดพลาด */}
          <form onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label className={styles.label}>Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className={styles.input}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label className={styles.label}>Password:</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className={styles.input}
                required
              />
            </div>
            <button type="submit" className={styles.button}>
              Sign In
            </button>
            {token && <p>Token: {token}</p>} {/* แสดงค่า token ถ้ามี */}
          </form>
        </div>
      </div>
    </center>
  );
};

export default Page;
