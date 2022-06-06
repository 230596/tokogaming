import OverviewContent from "../../components/atoms/organisms/OverviewContent";
import Sidebar from "../../components/atoms/organisms/Sidebar";


export default function Member() {
  return (
    <section className="overview overflow-auto">
        <Sidebar activeMenu="overview"/>
        <OverviewContent/>
    </section>
  )
}
