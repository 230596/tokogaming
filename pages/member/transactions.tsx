import Sidebar from "../../components/atoms/organisms/Sidebar";
import TransactionContent from "../../components/atoms/organisms/TransactionContent";

export default function Transactions() {
  return (
    <section className="transactions overflow-auto">
        <Sidebar activeMenu="transactions"/>
        <TransactionContent/>
    </section>
  )
}
