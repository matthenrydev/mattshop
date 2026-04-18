import { useEffect } from 'react';

export default function RealAd({ 
    client = "ca-pub-5411241953341855", 
    slot = "8004099823",
    format = "auto",
    responsive = true,
    style = {}
}) {
    useEffect(() => {
        // Activate Google Ads after component mounts
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            console.error('AdSense error:', e);
        }
    }, []);

    return (
        <ins 
            className="adsbygoogle"
            style={{ display: 'block', ...style }}
            data-ad-client={client}
            data-ad-slot={slot}
            data-ad-format={format}
            data-full-width-responsive={responsive ? "true" : "false"}
        />
    );
}
