import Layout from "../../components/layout"
import TitlePage from '../../components/page-title'

const Cart = () => {
    return (
        <Layout>
            <div className="max-w-container mx-auto">
                <div className="py-10">
                    <TitlePage title="Giỏ hàng" classes="font-semibold"/>
                </div>
            </div>
        </Layout>
    )
}

export default Cart