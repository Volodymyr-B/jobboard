import React, { FC } from "react";

const and = "&";

const Responsibilities: FC = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mt-6">
        <h5>Responsibilities</h5>
        <p>
          Wellstar Medical Group, a physician-led multi-specialty group in
          Atlanta, Georgia, is currently recruiting for a BC/BE cardiothoracic
          surgeon to join their existing cardiovascular program. This is an
          opportunity to play a key role on a multidisciplinary team of
          cardiologists and surgeons.
        </p>
        <p>
          The ideal candidate will have five or more years of experience in
          cardiac surgery. This candidate should be facile with off-pump
          revascularization, complex aortic surgery, minimally invasive valve
          and valve repair, transcatheter valve replacement, surgical atrial
          fibrillation ablation, ventricular assist device placement, and extra
          corporeal membrane oxygenation.
        </p>
        <p>
          Wellstar is one of the largest integrated healthcare systems in the
          Southeast with 11 hospitals in Atlanta metro region. With two open
          heart programs at Kennestone Regional Medical Center and Atlanta
          Medical Center, Wellstar cardiac surgeons perform over 1200 cardiac
          procedures per year. The cardiac service line is the only center in
          Georgia with the Joint Commission's Comprehensive Cardiac Center
          certification.
        </p>
      </div>

      <h5>Compensation {and} Benefits</h5>
      <ul className="text-lg list-[square] list-inside xl:list-outside">
        Our physicians enjoy a wide range of benefits, including
        <li>Very competitive compensation package with bonuses</li>
        <li>Medical, Dental, and Vision Insurance</li>
        <li>Occurrence-based Malpractice Coverage</li>
        <li>
          Short-term and Long-term Disability Insurance and life insurance
        </li>
      </ul>
    </>
  );
};

export default Responsibilities;
