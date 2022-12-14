import styled from 'styled-components'
const Widget = () => {
    return (
        <WidgetWrapper>
            <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmemes&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="1500"
                style={{ border: "none", overflow: "hidden" }}
                scrolling="no"
                frameborder="0"
                allow="encrypted-media"
                title="Facebook Widget"
            >
            </iframe>
            {/* <iframe
                src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fmemes&tabs=timeline&width=340&height=1500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId"
                width="340"
                height="1500"
                style="border:none;overflow:hidden"
                scrolling="no"
                frameborder="0"
                allowfullscreen="true"
                allow="autoplay; clipboard-write; 
                encrypted-media; picture-in-picture;
                web-share"
            >
            </iframe> */}
        </WidgetWrapper>
    )
}
const WidgetWrapper = styled.div``
export default Widget