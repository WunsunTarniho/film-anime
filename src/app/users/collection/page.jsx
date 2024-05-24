import Header from './Header';
import CollectionList from "@/components/CollectionList";
import Collection from "@/app/controller/collection";
import NotCollection from '@/components/CollectionList/NotCollection'
import { Auth } from '@/libs/auth-libs';

export default async function Page() {

    const user = await Auth.user();
    const collections = await Collection.all({ user_id: user.id });
    
    return (
        <section className="p-4">
            <Header />
            {
                collections.data?.length != 0 ?
                    <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-4 my-4">
                        {
                            collections?.data?.map(collection => {
                                return <CollectionList key={collection.mal_id} collection={collection} />
                            })
                        }
                    </div>
                    :
                    <NotCollection />
            }
        </section>
    )
}