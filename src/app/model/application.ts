export interface Application {
    company: string,	
    jurisdiction: string,	
    dateSubmitted: Date,	
    assessor: string,
    status: string,
    auditType: string,
    auditDate: Date,
    applicationNo: string
}

export const ApplicationData: Application[] = [
    {
        company: "ABC Company",	
        jurisdiction: "DEC",	
        dateSubmitted: new Date("01/01/2021"),	
        assessor: "John Smith",
        status: "Submitted",
        auditType: "Online",
        auditDate: new Date("01/05/2021"),
        applicationNo: '12345'
      },
      {
        company: "DEF Company",	
        jurisdiction: "DEC",	
        dateSubmitted: new Date("11/08/2022"),	
        assessor: "John Smith",
        status: "Submitted",
        auditType: "Online",
        auditDate: new Date("11/21/2022"),
        applicationNo: '12345'
      },
      {
        company: "GHI Company",	
        jurisdiction: "DEC",	
        dateSubmitted: new Date("01/09/2023"),	
        assessor: "John Smith",
        status: "Submitted",
        auditType: "Online",
        auditDate: new Date("05/02/2023"),
        applicationNo: '12345'
      },
      {
        company: "JKL Company",	
        jurisdiction: "DEC",	
        dateSubmitted: new Date("01/03/2024"),	
        assessor: "John Smith",
        status: "Submitted",
        auditType: "Online",
        auditDate: new Date("01/07/2024"),
        applicationNo: '12345'
      },
      {
        company: "LMN Company",	
        jurisdiction: "DEC",	
        dateSubmitted: new Date("04/21/2023"),	
        assessor: "John Smith",
        status: "Submitted",
        auditType: "Online",
        auditDate: new Date("04/25/2023"),
        applicationNo: '12345'
      },
      {
        company: "OPQ Company",	
        jurisdiction: "DEC",	
        dateSubmitted: new Date("11/12/2023"),	
        assessor: "John Smith",
        status: "Submitted",
        auditType: "Online",
        auditDate: new Date("11/18/2023"),
        applicationNo: '12345'
      },
      {
        company: "RST Company",	
        jurisdiction: "DEC",	
        dateSubmitted: new Date("06/07/2023"),	
        assessor: "John Smith",
        status: "Submitted",
        auditType: "Online",
        auditDate: new Date("06/21/2023"),
        applicationNo: '12345'
      },
      {
        company: "UVW Company",	
        jurisdiction: "DEC",	
        dateSubmitted: new Date("02/05/2024"),	
        assessor: "John Smith",
        status: "Submitted",
        auditType: "Online",
        auditDate: new Date("02/11/2024"),
        applicationNo: '12345'
      },
      {
        company: "XYZ Company",	
        jurisdiction: "DEC",	
        dateSubmitted: new Date("03/04/1998"),	
        assessor: "John Smith",
        status: "Submitted",
        auditType: "Online",
        auditDate: new Date("03/08/1998"),
        applicationNo: '12345'
      },
      {
        company: "AAB Company",	
        jurisdiction: "DEC",	
        dateSubmitted: new Date("09/01/2021"),	
        assessor: "John Smith",
        status: "Submitted",
        auditType: "Online",
        auditDate: new Date("09/09/2021"),
        applicationNo: '12345'
      },
      {
        company: "CCD Company",	
        jurisdiction: "DEC",	
        dateSubmitted: new Date("10/10/2022"),
        assessor: "John Smith",
        status: "Submitted",
        auditType: "Online",
        auditDate: new Date("10/15/2022"),
        applicationNo: '12345'
      },
      {
        company: "EEF Company",	
        jurisdiction: "DEC",	
        dateSubmitted: new Date("06/16/2023"),	
        assessor: "John Smith",
        status: "Submitted",
        auditType: "Online",
        auditDate: new Date("06/20/2023"),
        applicationNo: '12345'
      }
  ]