import { ElectricsHero } from "@/components/Electrics/ElectricsHero";
import { ElectricsServices } from "@/components/Electrics/ElectricsServices";
import { ElectricsWhyUs } from "@/components/Electrics/ElectricsWhyUs";
import { ElectricsAreas } from "@/components/Electrics/ElectricsAreas";
import { ElectricsSmallJobs } from "@/components/Electrics/ElectricsSmallJobs";
import { ElectricsContact } from "@/components/Electrics/ElectricsContact";
import { AccreditationsStrip } from "@/components/Accreditations/AccreditationsStrip";
import { HomeRecentWork } from "@/components/Home/HomeRecentWork";

export default function Home() {
  return (
    <>
      <ElectricsHero />
      <ElectricsServices />
      <ElectricsWhyUs />
      <ElectricsAreas />
      <HomeRecentWork />
      <AccreditationsStrip
        variant="logos"
        eyebrow="Accredited & checked"
        title="Approved and independently audited"
        lead="NICEIC approved electricians, with our health and safety checked by CHAS, Constructionline and SMAS."
        majorSeam
      />
      <ElectricsSmallJobs />
      <ElectricsContact />
    </>
  );
}
