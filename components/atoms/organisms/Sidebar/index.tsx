import Footer from "./Footer"
import Menu from "./Menu"
import Profile from "./Profile"

interface SidebarProps {
  activeMenu : 'overview' | 'transactions' | 'settings'
}
export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
    <div className="content pt-50 pb-30 ps-30">
        <Profile/>
        <div className="menus">
            <Menu title="Overview" icon="ic-menu-overview" active={activeMenu === 'overview'} href="/member"/>
            <Menu title="Transactions" icon="ic-menu-transaction" active={activeMenu === 'transactions'} href="/member/transactions" />
            <Menu title="Messages" icon="ic-menu-message" href="/member"/>
            <Menu title="Card" icon="ic-menu-card" href="/member"/>
            <Menu title="Rewards" icon="ic-menu-reward" href="/member"/>
            <Menu title="Settings" icon="ic-menu-setting" active={activeMenu === 'settings'} href="/member/edit-profile"/>
            <Menu title="Log Out" icon="ic-menu-logout" href="/sign-in"/>
        </div>
        <Footer/>
    </div>
</section>
  )
}
