import PostSingle from "./PostSingle";

export default function SinglePostPage() {
    return (
        <>
            {/* Single Article Section Start */}
            <div className="single-post-page sec-padding">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <PostSingle />
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Article Section End */}
        </>
    );
}
