import React from 'react';
import { jsPDF } from 'jspdf';
import Logo from '../../assets/logo.png'; 

const GeneratePdf = () => {
  const generatePdf = () => {
    const doc = new jsPDF();

    const companyName = 'Natwest Group';
    const companyAddress = '123 Main Street, City, Country';
    const companyWebsite = 'www.example.com';
    const companyEmail = 'info@example.com';
    const companyPhone = '+1 (123) 456-7890';

    const experienceLetterContent = `
      ${companyName}
      ${companyAddress}
      Website: ${companyWebsite}
      Email: ${companyEmail}
      Phone: ${companyPhone}

      Date: [Date]
      
      To Whom It May Concern,

      This is to certify that [Employee Name] has been employed with [Company Name] from 
      [Start Date] to [End Date]. During this period, [Employee Name] has demonstrated 
      excellent performance and contributed significantly to our organization.

      [Employee Name] has shown exceptional skills and dedication in their work, and we have
      been impressed by their contributions to our team. 
      We wish [Employee Name] success in all their future endeavors.

      Sincerely,
      [Your Name]
      [Your Title]
      [Company Name]
    `;

    doc.setFontSize(12);
    doc.text(experienceLetterContent, 20, 20);

    doc.addImage(Logo, 'PNG', 26, 10, 10, 10);

    doc.save('experience_letter.pdf');
  };

  return (
    <div>
      <h1>Generate Experience Letter</h1>
      <button onClick={() => generatePdf()}>Download PDF</button>
    </div>
  );
};

export default GeneratePdf;
