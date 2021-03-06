import {Component} from 'preact';
import style from './style';

export default class SocialFooter extends Component {
    constructor(props) {
        super(props);
        if (typeof window !== "undefined") {
            this.io = new IntersectionObserver(
                entries => {
                    const visibleEntries = entries.filter(e => e.isIntersecting);

                    visibleEntries
                        .filter(e => e.target instanceof HTMLImageElement)
                        .forEach(e => {
                            e.target.src = e.target.dataset.src;
                        });
                },
                {
                    /* Using default options. Details below */
                }
            );
        }
    }

    componentDidMount() {
        const ele = document.querySelector(`.social_gif`);

        if (!this.io || !ele) return;

        this.io.observe(ele);
    }

    componentWillUnmount() {
        if (!this.io) return;
        this.io.disconnect();
    }

    render({rootPath}) {
        return (
            <div class={style.social_footer}>
                <div class={style.social_body}>
                    <p>Keep in touch with Developer Student Clubs for the latest OMG announcements</p>
                    <div>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <title>Developer Student Clubs OMG Facebook Page</title>
                                <g fill="none" fill-rule="evenodd" transform="translate(-52)">
                                    <g transform="translate(52)" fill="#1a73e8">
                                        <path
                                            d="M17.1766667,30.88 L21.6726667,30.88 L21.6726667,19.9986667 L24.672,19.9986667 L25.0693333,16.2493333 L21.6726667,16.2493333 L21.6773333,14.372 C21.6773333,13.3946667 21.7706667,12.87 23.1733333,12.87 L25.048,12.87 L25.048,9.12 L22.048,9.12 C18.4446667,9.12 17.1766667,10.9393333 17.1766667,13.998 L17.1766667,16.2493333 L14.9306667,16.2493333 L14.9306667,19.9993333 L17.1766667,19.9993333 L17.1766667,30.88 L17.1766667,30.88 Z M20,40 C8.95466667,40 0,31.0453333 0,20 C0,8.954 8.95466667,0 20,0 C31.0453333,0 40,8.954 40,20 C40,31.0453333 31.0453333,40 20,40 Z"/>
                                    </g>
                                </g>
                            </svg>
                        </a>
                        <a href="https://twitter.com/OmgDsc" target="_blank" rel="noopener noreferrer">
                            <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                                <title>Developer Student Clubs OMG Twitter Page</title>
                                <g>
                                    <path
                                        style=" stroke:none;fill-rule:nonzero;fill:rgb(10.196078%,45.098039%,90.980392%);fill-opacity:1;"
                                        d="M 20 40 C 8.953125 40 0 31.046875 0 20 C 0 8.953125 8.953125 0 20 0 C 31.046875 0 40 8.953125 40 20 C 40 31.046875 31.046875 40 20 40 Z M 20 40 "/>
                                    <path
                                        style=" stroke:none;fill-rule:nonzero;fill:rgb(100%,100%,100%);fill-opacity:1;"
                                        d="M 31.273438 12.648438 C 30.445312 13.015625 29.554688 13.261719 28.613281 13.375 C 29.570312 12.808594 30.304688 11.902344 30.652344 10.835938 C 29.757812 11.359375 28.765625 11.742188 27.710938 11.945312 C 26.871094 11.054688 25.667969 10.5 24.339844 10.5 C 21.78125 10.5 19.710938 12.554688 19.710938 15.085938 C 19.710938 15.445312 19.753906 15.792969 19.832031 16.132812 C 15.988281 15.9375 12.578125 14.109375 10.296875 11.335938 C 9.894531 12.015625 9.667969 12.808594 9.667969 13.644531 C 9.667969 15.238281 10.484375 16.640625 11.726562 17.464844 C 10.96875 17.441406 10.253906 17.230469 9.628906 16.890625 C 9.628906 16.90625 9.628906 16.925781 9.628906 16.945312 C 9.628906 19.171875 11.222656 21.023438 13.339844 21.445312 C 12.953125 21.550781 12.542969 21.609375 12.125 21.609375 C 11.824219 21.609375 11.53125 21.574219 11.25 21.523438 C 11.839844 23.34375 13.546875 24.671875 15.570312 24.710938 C 13.988281 25.9375 11.992188 26.671875 9.824219 26.671875 C 9.449219 26.671875 9.085938 26.652344 8.722656 26.609375 C 10.769531 27.90625 13.203125 28.667969 15.816406 28.667969 C 24.324219 28.667969 28.980469 21.679688 28.980469 15.617188 C 28.980469 15.417969 28.976562 15.21875 28.964844 15.023438 C 29.875 14.382812 30.65625 13.574219 31.273438 12.648438 "/>
                                </g>
                            </svg>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40">
                                <title>Developer Student Clubs OMG</title>
                                <circle fill="#1a73e8" cx="20" cy="20" r="20"/>
                                <path fill="#fff"
                                      d="M32,28.24c-.31-1.93-3.88-.45-4.1-2.56-.31-3,4.15-9.46,3.8-12A2.92,2.92,0,0,0,28.51,11a3.09,3.09,0,0,0-2.05.44.79.79,0,0,1-1.12,0,11.49,11.49,0,0,0-.9-.82,1.84,1.84,0,0,0-1-.4A3.09,3.09,0,0,0,22,10.3a3.89,3.89,0,0,0-1,.75c-.33.28-1.15,1.2-1.92.86-.33-.15-1.45-.71-2.27-1.06-1.56-.68-3.82.42-4.63,1.87-1.22,2.15-3.6,10.6-4,11.71a3.32,3.32,0,0,0,3.51,4.43,2.61,2.61,0,0,0,2.41-1.64c.39-.69,4-10.09,4.25-10.54a1.17,1.17,0,0,1,1.39-.48,1.27,1.27,0,0,1,.58,1.42c-.13.9-2.67,6.63-2.77,7.28-.16,1.1.36,1.71,1.51,1.77a2.2,2.2,0,0,0,2.18-1.41c.35-.65,4.35-8.67,4.7-9.2s.71-.78,1.11-.76.8.1.68,1-3.35,6.78-3.68,8.22a4.26,4.26,0,0,0,2.34,4.73C27.51,29.81,32.37,30.74,32,28.24Z"/>
                            </svg>
                        </a>
                        <a href="#" target="_blank" rel="noopener noreferrer">
                            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
                                <title>Developer Student Clubs OMG</title>
                                <circle fill="#1a73e8" cx="12" cy="12" r="12"/>
                                <path fill="#fff"
                                      d="M18.82,14.06l-1.55.52.54,1.61A1.24,1.24,0,0,1,17,17.76,1.24,1.24,0,0,1,15.43,17l-.54-1.61-3.21,1.07.54,1.61a1.25,1.25,0,0,1-.79,1.58,1.34,1.34,0,0,1-.44.06,1.25,1.25,0,0,1-1.15-.85L9.3,17.22l-1.56.53a1.67,1.67,0,0,1-.44.06A1.28,1.28,0,0,1,6.15,17a1.22,1.22,0,0,1,.78-1.57l1.56-.53-1-3.09L6,12.29a1.07,1.07,0,0,1-.43.06,1.24,1.24,0,0,1-1.14-.84,1.26,1.26,0,0,1,.8-1.58l1.56-.52L6.2,7.81A1.25,1.25,0,0,1,8.57,7l.54,1.61L12.3,7.55l-.54-1.61a1.26,1.26,0,0,1,.79-1.57,1.24,1.24,0,0,1,1.57.79l.54,1.62,1.56-.51A1.24,1.24,0,0,1,17,8.63l-1.56.52,1,3.09L18,11.72a1.25,1.25,0,0,1,.8,2.37Z"/>
                                <path fill="#1a73e8" d="M9.88,11l1,3.08L14.12,13l-1-3.07L9.88,11Z"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div class={style.social_gif}>
                    {/* <img class="social_gif" crossorigin="anonymous" alt="I/O 2019 Hashtag" data-src="https://res.cloudinary.com/limhenry/image/upload/v1555595550/ioxkl19_pwa/io19_hashtag.gif" /> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="129" height="162" viewBox="0 0 129.54 162.45">
                        <path
                            d="M48.61 127.61C59.48 136.9 65.9 148 67 159.16H3.29v-31.55h45.32m1.2-3.29H0v38.13h70.39c0-14.61-8.29-27.95-20.58-38.13z"
                            fill="#fde293"></path>
                        <path d="M0 76.27h129.54c0-40.7-33.83-74.78-73.38-76.27H0z" fill="#fbbc04"></path>
                        <path d="M0 76.27v48.05h99.91c0-17.15-7-33.92-18.85-48z" fill="#fdedc5"></path>
                    </svg>

                    <svg height="201" viewBox="0 0 409 501" width="209" xmlns="http://www.w3.org/2000/svg">
                        <g fill="none" fill-rule="evenodd" stroke-linecap="square" stroke-width="10">
                            <path d="m11.929 116.176h267.61v248.957" stroke="#fad2cf"></path>
                            <path d="m11.929 365.133h386.668m-247.025-125.619v-227.584h-139.643m0 227.584v248.647"
                                  stroke="#fce8e6"></path>
                            <path d="m11.929 121.176v118.338h386.668v247.647" stroke="#ee675c"></path>
                            <path d="m399.597 488.161h-387.668" stroke="#fce8e6"></path>
                            <path d="m11.929 11.93v104.246" stroke="#fad2cf"></path>
                        </g>
                    </svg>

                    <svg width="140" height="90" viewBox="0 0 299 150" xmlns="http://www.w3.org/2000/svg">
                        <path d="M293.916 5C291.29 82.77 227.634 145 149.5 145S7.71 82.77 5.084 5h288.832z"
                              stroke="#FAD2CF" stroke-width="10" fill="none" fill-rule="evenodd"></path>
                    </svg>

                    <svg aria-hidden="true" width="112" height="80" viewBox="0 0 512 257"
                         xmlns="http://www.w3.org/2000/svg">
                        <path d="M488 245c0-128.683-103.87-233-232-233S24 116.317 24 245h464z" stroke="#1a73e8"
                              stroke-width="18" fill="none"></path>
                    </svg>
                </div>
            </div>
        );
    }
}