import React from 'react'
// import './landing_page.css'
import './style.css'

import { Content } from './Content'
import RightComponent from './RightComponent'

const Landing_page = () => {
  return (
    <>
        <div className='container'>
            <div class="header-banner">
                    <div class="header-banner-img">
                        <img src="https://s3-alpha-sig.figma.com/img/d5ad/a679/5d65b84ab6f191ecdda8cdcc87cfd256?Expires=1699228800&Signature=YaQU6lFBQtE4wpvgi9XfMGi2sgb-LdTwkx92lWlge0pTNm0fmZmRqdGr1gP1PEn0TU311sEzLEy3Fj3dmXR-8NfhkihAglZIOV8srrbh9wOD8mlcOtCyF1wDE-1K91Kjctt-se~tj5~buvT3dV8M2YQWzSJQy8kWjGEGwD~~f0IjdfgYmRHq5xmHwkyY0eJnZtI8EVEpPQ1i-udbE~beBbbG63wCF12Z8spg41aumIPEG~PlG3i0Dg5QgXJ968htq8BalUiThCMNmupZoCS6-FQr4Qe88xpcnBqTv~FtqkPZgYgK7~YxhFRb8iiRAVxNL4lliuR7dJLhKyu3jBvimw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""/>
                    </div>
                    <div class="banner-content">
                        <h1>
                            Ace Our Single Shot Challenge !
                        
                            <div className='topIcon'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="44" viewBox="0 0 35 44" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.4323 32.1983C23.4081 31.2593 27.4871 31.0701 31.4399 30.9265C32.2909 30.8994 32.984 31.7972 32.9267 32.9201C32.929 34.0521 32.2243 34.9903 31.433 35.0255C27.6023 35.1603 23.6478 35.3243 19.8569 36.2333C19.0485 36.4324 18.2781 35.6885 18.1529 34.5736C18.0276 33.4595 18.6238 32.3981 19.4323 32.1983Z" fill="#FFB400"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.8222 25.7652C18.1086 17.7775 25.4507 10.4309 31.5674 2.29911C32.1079 1.54603 33.239 1.27696 34.0413 1.70875C34.8438 2.14115 35.0696 3.10142 34.458 3.86924C28.3443 12.0201 21.0052 19.3852 14.7218 27.392C14.1079 28.145 12.9732 28.3894 12.1682 27.941C11.4344 27.4785 11.2083 26.5183 11.8222 25.7652Z" fill="#FFB400"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.72274 9.35212C5.78832 12.9789 5.85425 16.6057 5.91987 20.2332C5.97715 21.0601 5.28302 21.7654 4.41923 21.8032C3.5554 21.8403 2.892 21.192 2.83467 20.3645C2.76868 16.7317 2.70237 13.0995 2.63642 9.46724C2.64064 8.63476 3.33483 7.93365 4.19895 7.90072C5.00157 7.87335 5.727 8.52023 5.72274 9.35212Z" fill="#FFB400"/>
                                </svg>
                            </div>
                            <div className='topIcon-mobile'> 
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 20 24" fill="none">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2143 17.4154C13.4314 16.8917 15.7061 16.7863 17.9104 16.7062C18.385 16.6911 18.7715 17.1917 18.7395 17.8179C18.7408 18.4491 18.3478 18.9723 17.9066 18.992C15.7704 19.0672 13.5651 19.1586 11.4511 19.6655C11.0003 19.7765 10.5707 19.3617 10.5008 18.74C10.4309 18.1187 10.7634 17.5268 11.2143 17.4154Z" fill="#FFB400"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.97038 13.8279C10.476 9.37348 14.5704 5.27662 17.9814 0.741868C18.2828 0.321907 18.9136 0.171857 19.361 0.412647C19.8085 0.65378 19.9344 1.18928 19.5934 1.61746C16.184 6.16285 12.0913 10.27 8.58738 14.735C8.24503 15.155 7.61226 15.2913 7.16335 15.0412C6.75411 14.7833 6.62804 14.2478 6.97038 13.8279Z" fill="#FFB400"/>
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M3.56894 4.67502C3.60551 6.69754 3.64228 8.72005 3.67887 10.7429C3.71081 11.204 3.32373 11.5974 2.84203 11.6184C2.36031 11.6391 1.99036 11.2776 1.95839 10.8161C1.92159 8.79027 1.88461 6.76475 1.84784 4.73922C1.85019 4.27498 2.23731 3.884 2.71919 3.86564C3.16677 3.85038 3.57132 4.21111 3.56894 4.67502Z" fill="#FFB400"/>
                                </svg>
                            </div>
                        </h1>
                        <p>Jumpstart Your Career with Our Free Assessment Test: Prove Your Skills and Secure an Internship
                            Today!</p>
                        <div class="cta">
                            <a href="#" class="btn">Take A Free Assessment</a>
                            <a href="#" class="btn-mobile">Take A Test</a>
                        </div>
                    </div>
                </div>
            
                
                <div className='about'>
                    <p className='text'>See where our students are interning </p>
                    <div className='banner2'>
                        <div><img src="https://s3-alpha-sig.figma.com/img/62fe/bb31/0a1b8d06b9379353c45da472073c5990?Expires=1699228800&Signature=bWHDY3~3kDOrHVcifFWHLbXHc0qXLivI8eN3r5IC~m0SZgb52kvy351q4xNFCCWtZLM92LBkimAsJID36joxVzTxPVfz2OivI92VUSzjbCzKNeD-D-AbQ7MKecmj1mV5YMKIdPNQshlSxo1SBFvMcUk1I5jH9tiPUyC3hpJg5SxerLOS7-LXsPWNDB3GjXMo7B~hltFM7P54GVLuGa5rWEgKIxvRAqiV65OBkEUY2L5dk9XebliXgY97B17Z~IKlJM2wiTb8Nz0BzHXxbcwtDjxeKc8jGqDVIUMWGMFagJZ7b0ZeyjpBN~PvYRk9f0urU0XhKxj25YnAUlWkwOI~zQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt=""  /></div>
                        <div><img src="https://s3-alpha-sig.figma.com/img/b31c/ffda/e5962617d2cd7a674c0c087926a09b3a?Expires=1699228800&Signature=dtHwmwsSxbmrszLGeNKv85BB88DNLNLQbmNhQ00-MUIeVi-PMadMAoJ2pCFoK6k43itlopttfbb8JfbsWC5B3Ngl15vStmmA1ExKCYe6zGXHRaeIem1-L-Qmn4rRUG7ocR2AfhQkhTGWi~hba4TpKVgxyD7f1ERmp8q2c6KOmFGBxqKpZYrdO7sGqMqqSdNjGueh5S8-o9-S8QTOpi4zZgf46Cu4G-7~pMkUNDaS5se4ybXw2EFuLsMpIrX7M2GqOBQc6Yd~5QuEEGF04cMBxp25WJqX22i1jZ8WFHajfmMIrLvCfRA8LTwwW3q5dqWrtxtEFv5ZY5rY1ovOlS1~CA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></div>
                        <div><img src="https://s3-alpha-sig.figma.com/img/18f2/1a58/78562825d10ec4dcfcc52e35d8104c1d?Expires=1699228800&Signature=QcYIPTGPvBvj5JJjWWWl4SqpS9t7aYGi5pFGkzaEOHNDG2s5tSSaUgw8tvdkdB3FsNjMKTU~19tqAqdwlkFj2fJCj207NDSeVCE1B9nggek8h6ftYRolNF4x59ImyrsNOB1tq7VS-oPElJ6dPOBMsB9TnihzSqIIDoD6-n76wAuXG2AsgyF8DPC8Z2cVHzYkosI-WdAIjV1IKeOqHIn8uEh5l69WBVZ8-rOG972RViyyqw12fGuwll4Y~XsqrtDCl8vG0DEVa6GxHVNnSRGVRD0hYBRtqDnxjFKtH-qwoe4fC~g2oPo9Zzrjd3Bh6cGn78QAB2ybjB8JBMtOTDaGZQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></div>
                        <div><img src="https://s3-alpha-sig.figma.com/img/04eb/e317/4e9ef3634c4fbb0c1b889870635f0e1c?Expires=1699228800&Signature=WAFO2lnvNGNlTEnbn6pmomJXtJbfxC8DwNdoHWU3V2JU5AtvoYOBrhsNcmOgJtt1wGV5WV2tOBvkXqy7G6dUxOUIHH~ybgDCmXctrnms-u--~pF65MldEkrsGInhBaEj8k4SwKQPIewZ94UVES~wsj2DKACUOeChjRlVY5tej0t5rXTRYGQXy0YcGDi5yfdxXkvMB8o2wgPAUeL6xF0H0QglUFgRi90fIwPxt~DiV1i2krxEtAvxex5jBkJuPq0UrThRiAxPPuPLdf2AqDVEkT7BIvthDmRBqyX8OP3w2rFXVjzrhR-ERrN-IpMkggoix0Ku5ygH1hG8p7q66FN96g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" alt="" /></div>
                    </div>
                </div>
            
            <div className='contentBox'>
                <div className='contentLeft'><Content/></div>
                <div className='contentRight'><RightComponent/></div>
            </div>
            
        </div>
    </>
  )
}

export default Landing_page