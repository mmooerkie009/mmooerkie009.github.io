// pages/api/auth/[...nextauth].js
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        // ตัวอย่างการตรวจสอบผู้ใช้
        if (credentials.username === 'admin' && credentials.password === 'password') {
          return { id: 1, name: 'John Doe', email: 'john@example.com' }; // ส่งข้อมูลผู้ใช้ที่ถูกต้อง
        } else {
          return null; // ถ้าไม่ถูกต้อง ส่งคืน null
        }
      }
    })
  ],
  pages: {
    signIn: '/auth/signin', // กำหนดหน้า login ของคุณ
  }
});
