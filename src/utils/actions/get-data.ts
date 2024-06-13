export async function getDataHome() {
    try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}-044abd00-2989-11ef-8c7a-5be48fbe2702/objects/666b0db1864193998e15d733?read_key=${process.env.READ_KEY}&depth=1&props=slug,title,metadata`)
    
        if(!res.ok)throw new Error("Failed to fetch data");

        return res.json();

    } catch (error) {
        throw new Error("Failed to fetch data");
    }
}