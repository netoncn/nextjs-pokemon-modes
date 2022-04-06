const handler = async (req, res) => {
    for(const url of req.body) {
        await res.unstable_revalidate(url)
    }

    req.status(200).json({ revalidate: true })
}

export default handler