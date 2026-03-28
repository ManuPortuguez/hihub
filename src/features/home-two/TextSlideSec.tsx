import Star1 from "@/images/star-1.png";
import MarqueeSlider from "@/components/elements/MarqueeSlider";
import { useTranslation } from 'react-i18next';

export default function TextSlideSec() {
    const { t } = useTranslation();
    return (
        <>
            <section className="text-slide-sec sec-padding text-slide-sec3 overflow-hidden">
                <div className="marque-active">
                    <div className="text-slide-wrap">
                        <MarqueeSlider
                            mode="1"
                            className="text-slide-wrap"
                        >
                            <div className="text-item">
                                <img src={Star1} />
                                <h3 className="display-1">{t('marquee.transport')}</h3>
                            </div>
                            <div className="text-item">
                                <img src={Star1} />
                                <h3 className="display-1">{t('marquee.logistic')}</h3>
                            </div>
                            <div className="text-item">
                                <img src={Star1} />
                                <h3 className="display-1">{t('marquee.globalExport')}</h3>
                            </div>
                            <div className="text-item">
                                <img src={Star1} />
                                <h3 className="display-1">{t('marquee.transport')}</h3>
                            </div>
                            <div className="text-item">
                                <img src={Star1} />
                                <h3 className="display-1">{t('marquee.globalImport')}</h3>
                            </div>
                        </MarqueeSlider>
                    </div>
                </div>
            </section>
        </>
    );
}
