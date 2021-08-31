import BeerForm from "./components/organisms/BeerForm";
import { HomeProvider } from "./useHome"
import BeerList from "./components/organisms/BeerList";

const Home = () => {
    return (
        <HomeProvider>
            <BeerForm />
            <BeerList />
        </HomeProvider>
    )
}

export default Home