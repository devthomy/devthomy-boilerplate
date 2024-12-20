import Image from 'next/image';
import * as React from 'react';

interface NewMemberEmailProps {
  firstName: string;
}

export const NewMemberEmail: React.FC<Readonly<NewMemberEmailProps>> = ({
  firstName,
}) => (
  <div style={{ backgroundColor: '#ffffff', padding: '30px', borderRadius: '10px', fontFamily: 'Arial, sans-serif', boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)' }}>
    <Image src="/logoBlack.png" alt="logo" width={120} height={120} style={{ marginBottom: '30px' }} />
    <h1 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '20px', color: '#333' }}>Welcome to Our Community, {firstName}!</h1>
    <p style={{ marginBottom: '20px', fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
      We are thrilled to have you join us as a new member. As part of our community, you will have access to a wealth of exclusive resources, exciting events, and valuable networking opportunities designed to help you grow and succeed.
    </p>
    <p style={{ marginBottom: '20px', fontSize: '16px', lineHeight: '1.6', color: '#555' }}>
      Take some time to explore the platform and discover all the benefits your membership has to offer. If you have any questions or need assistance, our friendly team is always here to help.
    </p>
    <p style={{ marginBottom: '20px', fontSize: '16px', lineHeight: '1.6', color: '#555' }}>We look forward to seeing you engage with the community and make the most of your experience!</p>
    <p style={{ fontSize: '16px', color: '#333', fontWeight: 'bold' }}>Warm regards,<br />The Team</p>
  </div>
);
