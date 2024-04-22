import Gellery from "@/app/components/Gellery";


type  Props = {
    params: {
        myParams: (string | undefined) [] 
    }
}

export function generateMetadata({ params: { myParams } }: Props) {

    const tpoic = myParams?.[0] ?? "curated"
    const page = myParams?.[1] ?? "1"

    return {
        title: `Results for ${tpoic} - Page ${page}`
    }
}

export default function SearchResults({ params: { myParams }}: Props){

    const tpoic = myParams?.[0] ?? "curated";
    const page = myParams?.[1] ?? "1";

    return <Gellery topic={tpoic} page={page} />
}