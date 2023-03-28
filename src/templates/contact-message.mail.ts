import { Request } from "express";


export const ContactMessageMail = (req: Request) => ({
  from: `${req.body.name} <${req.body.email}>`,
  to: `Moola Pay <info@moolapay.io>`,
  subject: `Contact Message: ${req.body.name}`,
  text: `
  <table>
    <tr>
      <td>Name</td>
      <td>${req.body.name}</td>
    </tr>
    <tr>
      <td>Email</td>
      <td>${req.body.email}</td>
    </tr>
    <tr>
      <td>Phone</td>
      <td>${req.body.phone}</td>
    </tr>
    <tr>
      <td>Company Size</td>
      <td>${req.body.company_size ?? 'Not Provided'}</td>
    </tr>
    <tr>
      <td>Message</td>
      <td>${req.body.message}</td>
    </tr>
  `
})