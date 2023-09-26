<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="priceform">
    <div>
      <table>
        <thead>
          <tr>
            <td>语言</td>
            <td>语系</td>
            <td>使用国家地区</td>
            <td>分布人口</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAA0lBMVEUAAAAIAAAFAAEAAAAqAwXtHCTqGiMAAAAAAADtHCTnGiLiGiLhGSKlFBjuGyXoGiPSFx/rGiTrGiSqExroGyPQFx/GFh3FFR26FRuxExhWBwfrGyTiGiLhGyHLFR+dERePDhOTERN6CxHsRB3pGiXnHCPoGyTuHCXuHyPvJyLvJCLvLCHuGyTwNh/xShzyUxr4pwz//wDvMCDwPh7yWBn1iRH7zQb94wPyXRn0cBX2jxD6xQj70wb++gDwQx3zaBf1ghP2lhD2lw/4rgv5uQr98QH89IJdAAAAJ3RSTlMACxcOGvTWFAnvwaqmQPvFeevaRch1ZV9USyDku6BsPDU0LdzRysmIye2WAAABWElEQVQoz3WTV5KDMAxATYfQQ3rfKnpJr9v3/ldax0DiLOH9SU8aj0cSuiJzEouROBlVYXjd0hqi2NDaU56pyK6pGOB6EQAIZve2gHkcC4Dx958BYJTxA+U5p5lsAePt9h4QnvvcxfZsSL9dnAxDD+K8wO4X/Yz+FCebzTJenCui9QcQhrPc82qyPmXZ6bg8a3+XuLlXedLcUWC+ybJD8WoIBUKXOTe3AOLfw3EdAGHuld7E7bIuAKxWXpQuSG7xs/ILrTgy4iwAN3IBgjnJeV9bKDAsDkkqUARvru9fXlclxJq0TdOACk0WsU0q9pfvLhWKWItAE8I/3YBaGiyStHqtSfhjRq1uc0h2lDor6DJC/EudfuXJSIT7VumQiQ7U+1rli0Vr3rNiuW6MY1et3WOuy1bpH5JVLL0+EmhpjGa3iz6YtITSKa3JoHon03Z+RJbO38r6E/wDpRBeJeolE3wAAAAASUVORK5CYII="
                  alt=""
                />
                <span>简体中文</span>
              </div>
            </td>
            <td>
              <div><span>汉藏语系-汉语族</span></div>
            </td>
            <td>
              <div>
                <span>
                  中国大陆、香港、澳门、台湾、新加坡、马来西亚、苏里南等国家和地区
                </span>
              </div>
            </td>
            <td>
              <div><span>14.5亿</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAA51BMVEUAAAAar5YUo4scr5Ubr5Uar5Yaq5IZqpMZnoUar5Ybr5car5UXn4Qar5car5UZrpYYsJcYrJMZnoUbr5gYn4UZn4Uaq5MZn4YYn4UYnoQYn4cZnIQbr5YZnoWbzsTj9PHQ4d3d5uPx+vip2tH////q6upCr5optJ0mo4y34Nmp29KBxLdmu6vF5+Go08pwwrNatqRStqMarZMzqJK119GN18qOyb1NsZ4Zp47U7eiq4deb3NGMzsJ+yLpiyLc4uaMZo4rQ4t/D3NfC3Nea1MmCzMB0wLEospszr5mc08pvwrJbwbBGvqnTk6lgAAAAHHRSTlMAjxDv799vT+/Pv5+Pf39fPx/fj3/vz7+fX0AfzJFDvwAAAbFJREFUKM9tkolS4kAQhodAuFw51L3TmTMxIQQIKIeAi7q6rvr+z2PPDDFG/Kqmaipf+k/PpMkbTq/SqnlerV1pkAOcDqoct9Mv27qVxQvd97biHVAp7JH3CUcfa8+v11f/75//leu7e3kplKA8CG7u9y/Ute27Zv9CaSxC6Yf8jt08mkc1B/Wx2f4Rf0M6BunDA4/m/HGqH3ZQuyaZ0uyJgtZwmyw4i5a2vGGK11QqlW6zdDR5YJz7LIEdBvRs2+diDKGKU6ECdjsKZrDgEcASm29rfY25mQIbDjzENcHN7hupan0ZA4xXuWZDgNEckK/EfPqKSpkKKSVlvu+zC1w+aHI9GKS4BkbzQtvwtQ6npfBE2yZpmdYEQChyHSz2rcH3/GAZzJSMqeD4YTzYkIHmC+l5pnW6EYpux/HFJLkLzLVoGsSp2ksV2WZlw9lwgpeq7cn7XxKJLWrMDed8Bpoz1FhuPKUr+0NHjFl78tuMYT4OVCnBgoAnERh+lodpOtwM/PkCpW37YBSXUPDjk0GeAhS1BV23HNCskxL9YzcP2EHzzCEHNE7beMZq6/RXIV8BO7Rbh4rx85kAAAAASUVORK5CYII="
                  alt=""
                />
                <span>英语</span>
              </div>
            </td>
            <td>
              <div><span>印欧语系-日耳曼语族</span></div>
            </td>
            <td>
              <div>
                <span>
                  英国、美国、澳大利亚、巴哈马、爱尔兰、巴巴多斯、百慕大、圭亚那、牙买加、新西兰、圣基茨、尼维斯、特立尼达、多巴哥、加拿大、多米尼克、圣路西亚、圣文森特、格林纳丁斯、密克罗尼西亚联邦、爱尔兰、香港、利比里亚、南非、新加坡、马来西亚等全球约110个国家和地区
                </span>
              </div>
            </td>
            <td>
              <div><span>12.68亿</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAABF1BMVEUAAAAGAAAAAAC5AAAJAAAiAAAGAAAAAAAAAAC6AAC3AAC0AACwAACwAACaAAC1AACDAAC6AAC3AAC1AABzAAC5AAC3AACkAAChAAB+AAAvAAC5AACyAACwAAChAACeAACRAACOAACGAACEAAB9AABdAABLAAC6AAC2AAC1AAAAAAC6AAD9+vrHMjLDIyP+/Pz57Oz34+PvxMT88/P55+f23t6+Dw+7AwP67+/yz8/ehITTXV3INja8CAj89/f56eny09Pqs7PnqKjfiYnZdnbYcnLOSUnEJyfCHR2/FBT129vz1dXxzMzwyMjtvb3or6/mpKTil5fbe3vXa2vSWFjMRETKPz/LPT302NjruLjnq6vWaGjUZWVIxctIAAAAK3RSTlMACw7tGRkXFQn01cCqpWLIQfvYxDXx3Hl0Ph3luqF4bFZQSkY7LSL40soPizli9gAAAa5JREFUKM+FU4dyglAQfBQBQRQ1Rk3vjd5i7713Tfv/74iB97DOZGeYOW7njmNvD2zA4DRFkhSNM+AQGCnEeS4S4fjEA4ntk75glAiLLmLRoA/bYR8v/eIWiMuTLR6/j4h7eLnFPfaGEA9A3MF6LHnqJd+VFArPYX9fAGUKWW3q0WLgzCkOotapb0kdvnu0P4j9FYfQuzIoGVJL9BDyAcAknV/qrJ+Vaal2W17IsAMhMACPO+GkOpo2da0/+7I0fSQ7uXAcB7Q7mKGmpWzVkKu6pdtSpeAORwMq6kQ1NaMai3orV7ektFZrO8koBUhXsPaHqds/srJqNgwjB2djSUCycOxxWvtcyq1BOZcSNzTFIcGWjdx8rGSsroJojgI0D+PO0DTtcqNYKs4QzdMAv4Jrnku2VqpkpbJZQ3QCB4xAuL0rqi715Hw3XawjVZPMWtRXt3c2k5msv5rv9/KeqM5K/HBfrhb5Jpw85qwEnAXEPaCFQqOdHmNZZDfs/piZbrGN2Q7qz+/etqwqXOwY+fniZNfoT9ehGOTCROj66fBOHhI8x7IcfyVsbuSfE/wFWzBvngpAjw4AAAAASUVORK5CYII="
                  alt=""
                />
                <span>繁体中文</span>
              </div>
            </td>
            <td>
              <div><span>汉藏语系-汉语族</span></div>
            </td>
            <td>
              <div>
                <span>香港、澳门、台湾、马来西亚、中国大陆等国家和地区</span>
              </div>
            </td>
            <td>
              <div><span>1亿</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAABJlBMVEUAAAD/3Luw16wEBAAAAAAAAgAAAAAuGgMAAAD+/v8RhQb5ljD39/fh4eHUfigShwb/mTL+mTIRhgb7lTEShAb6+voMXQSwaSAAJQAAFgD51ripz6kSiAb+3Lv9mDERhgb4lTAQggfykTDxkC8RgAbx8fHykTAOdgQPdAUOcQW3bCEKYwO3pZUJUQWaWx0INgD/mDOu1qqu1qv8lzIShgb5ljH6+vr6ljESgwcRgwcQgATx8fHw8PAPgAbjhyvehCwPawbMeCcNawPEdiSbppeAmIALRACASxcSiAf/mTP///+wsNqtrdnx8fjm5vPKyuXGxuORkcuOjsqams+Zmc+FhcZMTKv5+fz29vu9vd+np9WYmM++vuC5ud6oqNaoqNWIiMdKSqolm2F/AAAASHRSTlMA+/sLFg8JGBP9ycbCd2D38+7s2NfVPz4bGPv78e7p3cC7qqampaB2bGVISD81MyH78Ozk5NzZ0cHBq6mpqXd0VlVRTkI+LSyzQLl2AAABUElEQVQoz4WTZ3uCMBCA00ICguLeo+49uvfeKbjFVrv//58oSk1A8PH9dnlz99w9uQAKgjyrwUMErDBc+DKX9vvTuaswx1ikJHq3sY5HlMwXmKeiBxvwFpsGD6t+vMTRHSS5NylsIVVl/m34ANuw19Qn4LLYliw3T5a89tojMbNkEa9A1NJRPblBicUMQbKOAHS9ENpfo5HSIaHDBQF/RsLOj9LrKWqbHJzzgHWSy4ry0e9P5G+inSxgDxfB63uvPx4PusO3xUlQ00GT/l3WTlJrqkwGg09ZdhiK8wXauCp3u7JKWy/w2mAO2ro8HE3bdFBtMHS/u0mJxw3BzgMCICo8r0CIzJ6k4ra3icr8xSMX9vo0oq/D45adDTQQ0H3NZ7W+W7KM8NqSv1+DgABDGVN/7kzDvOitspAgdYVyy/JPoqFS/iQQOM6XQlEi13zBP+9ZnnuVcR/DAAAAAElFTkSuQmCC"
                  alt=""
                />
                <span>印地语</span>
              </div>
            </td>
            <td>
              <div><span>印欧语系-印度-雅利安语支</span></div>
            </td>
            <td>
              <div><span>印度、巴基斯坦等国家和地区</span></div>
            </td>
            <td>
              <div><span>6.373亿</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAABsFBMVEUAAAABAAAIAAAAAAAAAAAEAAAAAACmFBghAAOqFRrtuwClFBmgExjInwCCDhR2Dg8nIgCqFBrwvgDwvgCpFBunFRrrugBkCw/xvwCoFBqnFBuoFBmmFBrqugDruQChExihExjltQDjtACiExjUpwCUERiMEBV7DhN3DhKriQBwDRFRCAtDBwfwvwDvvgCnFBmmExukFBnsvACiFBmjFRnWqACWEReXERfTpwCQExWQERWmhgCiggBpCg/xvwCqFRvsvALougTIiwrjtgfqtgDCiqC3flOFiUu8gkPAfzrPnzLSsiyHPCPMrRzVsRbEoxW1UxOyYhCuRRC2ag+hTA6+ZQunYAq4cQjGhAethAXlqgLtuQHorgG+qLGwlqDEpo7JsoizgX7BlWpvXGTIs1a5ck2+pUyidUm0a0evYULDq0FkQUC9pz+tjj6qeDzRszWnlzPSqjKllzK+eS/cty7OsCq7cCrPpidvVCSHSyKLKR6qNBSdIRLgsBGwWxC4RxDhsg/ftQyROwycUwubUwutawrLfwmeXQmLQgmrZQjKngfWjwXiowPHlQPltALiogKDuDXBAAAAPnRSTlMACxgUDw0I1hrz1sGmY1NAGfv08O7syjX75d3axMTBq6qppaF4dV9KRkM8LSL17+nIyMW7unt5eHRsbD8/M/Bl1bsAAAGWSURBVCjPhVNld8JAELzkkhAqQFvq7gJ11+DubnV3d3dv/3JbuJAAea/z6Wbm9iW3Ows4UASEOA4hQYFMYLh0MCdbJMrOaWzDsXSTbqqQ5zEJiCua6JQLpKJezPAgrx8nOZdoKWfSIJIQyVpJIZOBzmZUj0nLGAGUFie+T9cwgqih48W5BROCyM/9K5cV8SSVikd6ZABQo/mcqXU6tdyFjlYKEA1JqtZ43W6vRs3ykn4SwFqW6aIh38O9L/SlY5VaCGAlS8Kf7893y5sHb2FWqYQAz2LJ2vH1y8WkfmZ7g1WycM6OmY7OT86m9NNmU4xnV6FzxLDvsa3Pz86ZDREkVeEA1qHzx6IlGDi1ufyWlW8k1cHfh5WgH1+wBl8Dniv/7lIU2UMEoFpRT7XGPc3j1qrracd4i7o6RnFNVdsdqhvr4aXKYUeNKZLFR9IuPJKC+EgAXc0IoppOxEFRLuSKUBwA2SIQpkIJloyipCwjSs0EL8jSvpQg5/UWkylroBzuErOevHtEiWUsUVtjYokGpNwS/bOCPzKwnvbLZNCeAAAAAElFTkSuQmCC"
                  alt=""
                />
                <span>西班牙语</span>
              </div>
            </td>
            <td>
              <div><span>印欧语系-罗曼语族</span></div>
            </td>
            <td>
              <div>
                <span>
                  西班牙、美国南部、赤道几内亚、中南美洲，除了贝里斯、牙买加、海地、苏利南、盖亚那、法属圭亚那和巴西等国家和地区
                </span>
              </div>
            </td>
            <td>
              <div><span>5.379亿</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAz1BMVEUAAAAEAAADAAIAAAMAAAAAAAAABgsoAAYAJVIAJlPIECTx8fEAGTp9BxXNECUAI1EAI1H39/cAI0/DDyMAHUH////OECbOESaotcTusbcAJVMAJVPMDyTMESX6+vr5+fnJESTIDyQAIk7i4uK0DiHf39+vCx4AHkaqCx2dCxkAGT2fl50AESoAJVLJESXJECb29vYAI1DGECPEDyTCDiMAIkgAIEoAH0eWChiYChiRCxuKDBiAhIykhoYAByVSBwf///8AJlTOESaptcXusbjdUlrcAAAAQHRSTlMACxcOFAkaGtv1xKZBNe/Jw8GqqFn7+vTw8O/t6uXX19XJo3h3dGhkYFBHQC3W1dHBu7usoHl4bEtKQz88OyIihMtMNgAAAP9JREFUKM990+eawUAUBuA5U6RuiM4uFstq23tRZrj/axIMCVO+v2/OeZLMNygNIxQnoYQhNZCb9oPnTicOBnMHFCwX6pXVIQ1/dP4AmfU8vl7JbET0fgUZnbicZ1mIpzE5afmaX7K4+ZHzELpcZdGS+3NFrmNRcvbD900910awG85zPQs/GWehZ+LolyHywU1cvSOIFo0sShThgpl9jLBr5tuEH+xsX0571lcjn2ZOPoyFTRPX/pjtp3ad/ZF4eo6GYDvQN+dQh5mr48dj3WCiK9MY0rIpVWx9k0xVwxcvy9VXuVkGFl/5utRKoztcqvfkfxDE7XYc9Kc4RfsV3AKaO5YUzjID7AAAAABJRU5ErkJggg=="
                  alt=""
                />
                <span>法语</span>
              </div>
            </td>
            <td>
              <div><span>印欧语系-罗曼语族</span></div>
            </td>
            <td>
              <div>
                <span>法国、比利时、加拿大、瑞士等国家和地区</span>
              </div>
            </td>
            <td>
              <div><span>2.766亿</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAABC1BMVEUAAAAAAQAABQAAAAAEHQAYnAAAAAAYmgAXlAAYnQAQbgAXmAAYmAAWlAAABQAYnQAUigARegAPcAAOYQAYnQAYmgAYmgAYmQAYmAAYmQAUiQATggATggAAAAAXlgAWlAAVhQARcQARbAAHQwAYmwAXmgAXmgAViwALTwAMSwAZnQBdukwcngNhvFBauUgioQqb1JCe1ZOR0IV1xGZpv1il2ZyMzoBQtD42qSDH58CY042Gy3iAyXNswFxkvFJUtkJGsDLB5Lqo2p+h1paJzHt6xmwooxCz3aui15iW0YpvwV9Xt0Q7qyUvphjj8+HR68y34K+t3KSDynZ9x29MszkwpxrN6ce84LS34LDi6BYRAAAAKnRSTlMAChcQGu8T16bzP8bCqg77eFNENPXr3NXKwHRkXgi7oGtKOyLl5NF7LSwetC9bAAABvklEQVQoz3WTh3KbQBCGOToCVcuxJcs9dem9SBT1bsctyfs/SQArimSJjxmGmY+Fu9t/sf8ggsZTaOISOwThpRrbYpgW277D0UdJdgSqCu9wfIfce6Hy45qDHajrkx1PNBj4wNc6sa2tU3DA6e2mHpU+wRG+bL5PspKaXqBOVO/NUyVp48tkXnxBqbI+01a9cPw89H3L0VZmMFYmXAdlxefwOvK1ftQbDUbG4Ge3Zyu6P5x7wJPZnzmIjYdfWqLE3Z7pyFpoOuFAtxKgGpcYUQNQF0O7/xQ4ejR6FP84smnObMuF6jcCo8sAk1dj3O+61ov/8GgEQWQqum7HAGUaw3kAbzGYPYnB3JjbhvUiPnc1LXKWAAKO4QyAbPazFU1DcZi4oaHoiTjWPICzXKdI2xuoUvawVuFdC1BIC8dotlizdLqxaqFuExhqUEWWK6H8UFPeXNddirIsKss4thIPUs7JvCVNAJiIVuYURZSjxe/pNIvMBcobWoZ9pPV6tW0ohr4fjcPZv7hVGqdHwlRH2yjWD+o/3xI7QS5dNXdl8+qksjcG9zc8t3FVir+5RwdDdNdmBYYR2FoJ35fFI/gXmwBvBdIkiW8AAAAASUVORK5CYII="
                  alt=""
                />
                <span>阿拉伯语</span>
              </div>
            </td>
            <td>
              <div><span>亚非语系-闪米特语族</span></div>
            </td>
            <td>
              <div>
                <span>
                  阿拉伯国家联盟、以色列、厄立特里亚、马来西亚、尼日利亚、肯尼亚、乍得、塞内加尔、南苏丹、埃塞俄比亚、伊朗、土耳其、马达加斯加、坦桑尼亚、莫桑比克等国家和地区
                </span>
              </div>
            </td>
            <td>
              <div><span>2.74亿</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAA51BMVEUAAAAIAwMAAAAHBwcAAAAxMzMAAAAqCQbUKx0AN6MANqHJKBvV1dUAAAD////TKh36+vr4+PkAMJMAOKdJM3XUKh7+/v79/f3RKhzJKiHQKRzOKR34+PjLKR3w8PDy8vLi4uK7Jhq4Ixi1IxmlIBe5ubmaHBUhJVowS4KWGxSzs7OCGBCdnZ1VDwhegcT+/v5cf8T8/PzSKR3SKh75+fnTKh37+/vQKR3y9Pbx8fHz8/MANp0ANZ0ANp4ANZ4AMpHGxsbCwsKtra2THhFxEQuFhYUAOab////VKx76+v1egMZJNHbOKyKu2JXgAAAARnRSTlMACxQXCRkQGvjWwqlfD/Pr1cR2+/Hw7urXysjBwLumoHV1bGVTSEhBQEA/NjQh9O/v5OTd3NvZ1cmqqamppaV7VU87Oy0sEjqWUQAAAQJJREFUKM+F02eTwiAQgOGFEFDTY++96/Xeq1z7/7/nxkzuTITV5+ubzTDDAhuMU2oYlDoMVMScdVoN32+0Oi8mUaIdlGTMDez0B+S97cqEUnuR6Hx4Ibf4z/x/9qksFeUhievsTGocL1iUzRupdW1Gw/ahPrs2WQ9ffSICE4BNDr4QRxMGTrjC5B8doLcr1B0FmsNzjoKRxXPW2Jt3/dwAeo/nBwo8zKM55MDGhW9EYcwARPUHURUAQPqZD61iP7pxYemzJWCNvJ3r6uWcxesy8tTqDQjE+OB0u56MeGKRp83U+TLNeXrRl71a8a95td5SeSfitWvVK5W61Z2KdMSf4C96jKTx3NYu7gAAAABJRU5ErkJggg=="
                  alt=""
                />
                <span>俄语</span>
              </div>
            </td>
            <td>
              <div><span>印欧语系-斯拉夫语族</span></div>
            </td>
            <td>
              <div>
                <span>
                  俄罗斯、白俄罗斯、哈萨克斯坦、吉尔吉斯斯坦、塔吉克斯坦、卢甘斯克人民共和国、顿涅茨克人民共和国、德涅斯特河沿岸等国家和地区
                </span>
              </div>
            </td>
            <td>
              <div><span>2.58亿</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAACGVBMVEUAAAADAQAAAgC5GwAAAgATXgAAAAAAAAAAAAAAZQAAYwD7AAAARwD+AAD3AAA4AAD/AAD/AAAAZQAAYwD4AAAAYgDxAAAADwAmAAAsbAAAZQD+AAD8AAD6AAD4AAAAYAC5FgAAYADwAAAAWADfAADZAAAAUgDUAAAATwDFAAC4AAAARQCxAACiAACXAAAANADFjAC3OQC3NAAAZwATXgAAYwD6AAD5AAAAYgD0AADyAADxAAAAYADiAAAZTADjAAASTwAAWAAAVgAASAC6AACtAAAALQBwAAD/AAAAZgD+AgAObADnJBfRmQKctQB8ogChs9martb3k5DBch3fqxbYTRbhNBS6XRDxEhDQOw3tIw3sKQv1EgbcbgPtOwGitwCFpwB0nABrmgDemABhlQBMiAAdcwASbgAHaQDgZwDyNADuMwD5EQD6BgD77/HG0uj74+S+yuT03t2vtNKSp9KQpdGmrM69vM2+tMvzwLvjnqfwlJThnJPRrpHmfFHvVk3FiErhTUfoSC/uPC/UdhzWfxvoTxnBeBj1GRjCpBWxahPbnRKRhhKRchKalxBfYhBafQ7iGg7XkQ1UdQ00Yw1ebwzLYAzNXQzHcgnqFwmbqQg1cAfcvgbShAbigQbcaQasuQTpTASSrgMpdwHgcAHu5QDf3gDazAC3xgCkugDYigDEigDhdwDYdAATbwDpXQDlTgDgSgDnPADRDUK1AAAASHRSTlMACw7+GP4JFRP029c/7sEZ+vPvycbDphoY/uzq5M++qqWiondzaF9fVk9KRz80NCz+/v77+tTSybu7rKmoe3h4dGtlQ0M7IiKE64oaAAABx0lEQVQoz4WTZXPbQBiEJVWVZYohDrRNIWmYmRmtxBBmZmZmZmZm5uQXxrrYJ3nkmezX527nbt99EUYERvJwnEdiBMIViosi/5kJhWaW9gnWKAc6Wsj9vymBZAonCWpEvWz5FPWdxkBiOw8Wx9wEFAUwVKALBqnzT4qNgX65onpnkYDiYqWNJwEw/peCmK0wCbjsKP+kKT98G5NZWOZE21uZA1hTWa71rrusZx1QWOuyEvFpWn26urmxXZi/fsZwcTyBYP+B8d1czlpeTm5ehvodcmkEhpDgYVXXmdnpg0Pp41lH903wuiWJ8Cx0tLb0dkHV2tLVPKIqKGqA+A8PwQW0d4l2caYnNbVjNONE/QrxbxzBA2is0S6petPSuseyi9RvLGwwv1jZ62vrbJ+YPn4yMidtwdM0+/OTA/3Du5lXFYUQ25G6j/nRoWjOl7NyZwumDm+KmY/bYwgRJwexlFQebO3kF1e8MFTmTsBQn8vLyh7qHtmhBtEzQWP5hpH4NDYpGYkdwMStwk0PNFSiL5rJOggNdUPdTJXJBWXKxqmijSvGqqoo2KjI0hBP46Inxpjz9VgqVjgkodwliv5coih3Zom+WMEPfK65Y+9JQIMAAAAASUVORK5CYII="
                  alt=""
                />
                <span>葡萄牙语</span>
              </div>
            </td>
            <td>
              <div><span>印欧语系-罗曼语族</span></div>
            </td>
            <td>
              <div>
                <span>
                  葡萄牙、巴西、莫桑比克、安哥拉、几内亚比绍、赤道几内亚、佛得角、圣多美和普林西比、东帝汶、乌拉圭、澳门等国家和地区
                </span>
              </div>
            </td>
            <td>
              <div><span>2.522亿</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAulBMVEUAAAAFAwMDAQEAAAApAAAAAAAAAADjABDhABCeAArnABHmABD4+PjbAA/g4ODCAAy2trYqKir////+/v7lABD7+/vx8fH////////9/f38/Pz6+vriABD39/fgABDz8/Py8vLaAA/cABDLAA7X19e+vr6oAAmurq6MAAVpaWn8/Pz5+fn5+fniAA/w8PDNAA/KAA3Z2dnb29vHx8e1AAyyAA2hoaGSkpKFhYVxAAZERERAQEDnABH///8zvZvRAAAAPHRSTlMADQsUGRkI2cQ/9O/BqXZgQhnz7+nVpvz269zX1MjAu6ymoHVlTkg9NSLkysnJpXt5bGtWVk82Ni4tHhw4IcgcAAAA+UlEQVQoz3XT13KDMBCF4V0tEh0MGGzHvcfpvSrv/1oxjCbBFvvffjq60Qj+U0gkJREqsBOOv17OXHe2XPuOsDD1Qm0KvPT0AH6uAt0qXF2Klu5cfdbkFf/0pa+t+jvjwq+3tpv7nVh3FjvNOA27OUhFPb7VTN5xrvyA49BXgA+a7R6BYp5jAvJ49giky/NEgix/2EoJFPEcEVDF8x0BJgOWEwTVKzjN9wogu+b4JqufZDPs1mLTvOjXopsX31AnPi66tHwT0IS9ka2j7VGNP1v7qy02ZPbzvI3D+TtCK3F4nObGBsX06WD9k2yfVNF4HFVJLztF/gv+AtNTi6TPQy9uAAAAAElFTkSuQmCC"
                  alt=""
                />
                <span>印尼语</span>
              </div>
            </td>
            <td>
              <div><span>南岛语系-马来－波利尼西亚语族</span></div>
            </td>
            <td>
              <div>
                <span>印度尼西亚、东南亚国家联盟等国家和地区</span>
              </div>
            </td>
            <td>
              <div><span>1.99亿</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAA2FBMVEUAAADnQACUAAAEAwAAAAAAAAAAAAAAAAAAAAD/zQAAAAAAAAAqIwD+zADZAAAAAAAAAADDAACzkQAAAAAAAADdAAAAAAD/zQDlQACUAAD8ywAAAAD6ygD4yAD5yQDXAAD3yADWAAAAAADzxADzwwDvwQDRAAAAAADhtQAAAADZrwDWrQC6lQAAAACRDwAAAACggwBsTQBBMwAAAAAAAAD8ywAAAADYAAD5yQAAAADSAADRAADBAADHowAAAADGoQAAAACcIQBxAAAAAACIbADdAAD/zgAAAABB6NvCAAAARXRSTlMA+/sKDRYYE+33qF8Z69XVxHg+MQj78/Du7tzb18rHxMHBwLurp6ahdXVsZUhIQj81IRv79OXk2dXJqad0VlVRTj49Oy1UtdkBAAAA/0lEQVQoz33T13aDMBBF0UlGIEwxxT1x772l9+ro//8oYoUYY2l8XjeXpQcJ0pBxQ8ZZEdTQXE3sru937cmXiQo6gXUl/ioHTvYDVhiVxUHWqIAHurgUR/nvbK+vllCyFskeV3Krdpv837SFNtuMFR1Lz9cOxuMHQRTIOX7WzolqyyKwcEdVChnwxx3ZEwejRXPLAOOO5rzk/Gnu0NwxgA9pHnJgYYnkZwa4rJ4RVT8QwG38EDVcAMBZTq+VGYJs29dzfwtx+H2h0/s1Jpdp7qnqvaWX7UXZ38yl7j3qZc6X662lpuFm2qz8m9ecbpR34kbjQbtebw/GkZtF+gn+AnrdlZq2YJApAAAAAElFTkSuQmCC"
                  alt=""
                />
                <span>德语</span>
              </div>
            </td>
            <td>
              <div><span>印欧语系-日耳曼语族</span></div>
            </td>
            <td>
              <div>
                <span>
                  德国、奥地利、列支敦士登、瑞士、卢森堡、比利时等国家和地区
                </span>
              </div>
            </td>
            <td>
              <div><span>1.316亿</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAzFBMVEUAAAAGBgYAAAAAAAAsLCwAAAAAAAD////+/v76+vry8vLx8fHg4OCzs7P77/L////9/f36+vr5+fn39/f19fXx8fG4uLiampr6+vr5+fn39/fi4uLX19fT0tOurq778fT9/f38/Pza2trHx8fFxcW6urqEhIRpaWlBQUH////////+/v7///+8AC39+Pn++/y9BTHhjqLGKU69AzDtvsntucXdfpXUXnrUXHjUW3j67fD66u7ILFH+/PzikqXcepHbeZHVYX3TV3XilKcDdZbMAAAALHRSTlMACxUOGRgI8+7Sq6Z2QP7769bHwbyiSDXaysV5ZV88/uTca1ZPQy0iHfj18JFvbMEAAAFfSURBVCjPfVPpeoIwEAwJIAqonNbbelTbAuKJqNXWvv87layRszJ/kt3J5MvuTlACkWAsCBgTERXB8WpXNjTNkJUBzxXIvi41nDsqnX72APdmVZwUJKuV4on94uRQnZJYO2my5DIC2zZtjrEq055210N43R3v0Yjdz9cg9FZr343gr1ceJGo8iHsSDeqhG+NWhwL6HBW3QRtuEnpzA70eyUUVSrq4GaygvJmIiAJXn7P0+hQlG12CMDxs62dpf0ezMka4E61fezeHb1p/ByOBFr38ydMHj7ZOQIJWThvPLzcwwnLp04hCx3zMFwaNVwgSZ9DT33/aUhmIcVODdFNDaGqbh5F80P0wSNgDjOSzBxNdsIFe2EDPj4EumNFeHcBwuw+C/fZ0j7SH3Tg7NpPnxWaaxmYkE9CnMbJJyqqqmTHyu9nKGn0+1h8HGpI+nhf/yUCxzGrVtLoqn5DlX/APCJlpzL0F6d8AAAAASUVORK5CYII="
                  alt=""
                />
                <span>日语</span>
              </div>
            </td>
            <td>
              <div><span>日本－琉球语系</span></div>
            </td>
            <td>
              <div><span>日本、帕劳</span></div>
            </td>
            <td>
              <div><span>1.264亿</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAB2lBMVEUAAAAMDAwAAAAAAAA3NzcAAAAAAAAAAADw8PAlJSX7+/v29vbh4eGzs7P///9vb2/ExMSmpqaYmJj///9ra2ubm5v6+vr4+Pipqan9/f36+vqgoKD39/d8fHz4+Pj09PTx8fHy8vLg4ODZ2dnU1NS4uLiysrK6urqCgoJpaWn////+/v6oqKj+/v53d3f7+/uoqKiWlpb4+PiBgYGFhYXg4eHGxsbf39/Jycni4uIAAAD////NLjr9/f4AR6B5eXn39/cwMDABRp98fHw2NjbLLjosLCz77u/o6Oj34+Xk5OSoqKilpaUCSaGUlJSMjIx/f39xcXHVTFdEREQkJCT7+/v09PT00dRqlMfBwcG8vLwsZ7AKRJriiI+JiYlgYGDVU11PT09KSkpAQEDDLz75+fnr8ffo7vbe5/LZ4/DG1um8zuXh4eH23eC6urokYa0fXasUVqeampqRkZEzQIWDg4NqampjY2PRQUw7Ozvu7u7T3+7t7e3U3e3s7Ozr7Ozg4ODe3t7yzM94j72urq4gVqShoaGdnZ3Ti5haX5gRRJaEhIRnTX9KPXmlWnVUO3V9SXNhOm1oaGhwOGZ7N2FbW1uHNVtVVVWcM1GeM1DJQE69L0E+Pj4nJydsBtoaAAAAO3RSTlMADAoOGhgWE6YZ1cF5QPvsZEg18/Py2MQ97tzbyMjBu6ihdGxeVlBDLSL49e/t7eXk1dPKyaurqql0CGCKd94AAAIiSURBVCjPhZNVd9tAEEZlySBznMSQJmmYykzTtSxLMWOMiRnSNMxUZmbG/1qBazn2Q+7LPtyzM2d3vsEkcEKlVCiUKgLHWpGp9TpSq9FoyUGbWtYkcfmwtcsAIh3WYfmBCsT4QAc0cHKgXdZgTUegiXOjRL3tyKkZx0HrmDaaavdxWzcdCXuQJJFnk3KdaRf7y6/sU3Gmck/St2JMfJu5LBdKtxlL5R36GQJAbq/XzZ8BV7QU6WyT8ZcvxAqxr58SgFK54t5eMbcMkAiFylG6V8111pvzLPX3IUBq6rrA1CMAD0uxYfPYNYzQIV+g4kewzFvRpwD5y6Elg47AVP0ASe5d6MWkKLkjh8CxkkTQr8KUVhC48U7Q1Z/fflSLbhA4qsQUFhC4+UbQH185s+9/eUFAo8AUmpp++qU6+fuzncP5QdJKba14Jrv1disr6JdScRXJ//AsoHTQ6XTaeYKPEcxOOwBIFfcwg2+jFECwsGqvsXYX0JM//iV0lcDwsRMhNko/ALS4FhTuri4i8NAUmzfrce5Tz7uihd2dBKDb6cz6eia9gABtPN8txHrVwkg6v4cpOsCPYm5+fo4//a7I5rY4Ekx+iWXi1P59qHOnwsRfRy7KxTiMd9NM3tcYB1+Ycp2txQGTmYwryaYwzRhH62EkRlqieNpENOyAvu94ozzWxwdZAp8Y6vmfdENXz9AE3rJEtkFSa7FoSZ1eWqJDVvAfuIioh85lB9cAAAAASUVORK5CYII="
                  alt=""
                />
                <span>韩语（朝鲜语）</span>
              </div>
            </td>
            <td>
              <div><span>孤立语言或朝鲜语系</span></div>
            </td>
            <td>
              <div>
                <span>韩国、朝鲜、中国、日本、美国等国家和地区</span>
              </div>
            </td>
            <td>
              <div><span>7940万</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAA8FBMVEUAAAAOAAAAAAALAgAAAAAAAAAuBgTaJBzZJB3WIxvZJBvXJBvVIxzUIxuZGBLaJRzTIhzPIRrPIhrOIRrBIBiWGBLaJBzVJBvAHxe2HRe2HBaeGROFExDXJBzTIhvSIhvOIxu6HxitHBWmGRSgFhNzEQtTBwfBHxmFFA/aJR3//wDaJhzdORn20AXePRn++wDbKhvhTRbjWBToeBD++ADcMRrytAj54APbLxvfRhffRRfhVBXkaBPqhw7uoAvvpArzvQf1zAb1ygb98wH77AHmcBHtmA3rkA3smQzwqwr1wwfzwAb41QX30wX42AT65QP6ieImAAAAKXRSTlMADAkXFBAa8+/V69vJxUH7waumoXc99dJzZF5FNeS9u6lrVVBJLCF7MtUcApoAAAF+SURBVCjPhVPXdoJAEF2WBUFpAXvviYuAit3YTW///zehLig5J/dpZ+6ZO7NTQATIIETTCDEQJEHRUlZVeF5RizmauiEhWxY5eeAjJZZZeBXa01KDGNLaQ0yAqWQGNyh0GBLbThO3TgS6QTzMZSJ2Q561qp+fvYs0J28j8r5jPekSRzyj14VJjFSZcoOFKHhoTB91YomsmzkV0z7jXaTOSRAwWe+5HDownzE2xqaDoash3zMANT16PT8dj8YFY+vTMIyT7aVoIoBEX2n1YeEQiyfdT44AnQnL2k0D9msSlMfTgOZJS+yLS1rzmWMQWiGVjhce/UK+ptAAqYS2zxg7Cd6XoUNFzsfksGV7R3j7jX/WIV1kAKxwUcu2M31jWHbYVQnGmjo+eA0194cgucB6I8kH9Mp3jyZ+6VyJCgaaBBkogL3MXywfrAOgKukkm+5QZBXbifhal4ktstTIx8l8o3p1CbDfEsK1kDmh1YeJI8oVtXqhUNeyUnRE/5zgL8TMZQrj0MOOAAAAAElFTkSuQmCC"
                  alt=""
                />
                <span>越南语</span>
              </div>
            </td>
            <td>
              <div><span>南亚语系</span></div>
            </td>
            <td>
              <div>
                <span>
                  越南、中国大陆广西、台湾、美国、加拿大、法国、澳大利亚、捷克等国家和地区
                </span>
              </div>
            </td>
            <td>
              <div><span>7700万</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAMAAAAM7l6QAAAAxlBMVEUAAAACAgACBAEAAAAAAAAAAAAAj0QAHAgjBgbIKDQAkkX6+voAjkPDJzPx8fF+Fx/OKjbMKTbJKTX39/cAeTj////OKzao2cDuub0AkUUAkUXLKjUAjkPHKTUAi0IAiUHi4uIAgTu0Iy/f39+rIioAcjWeHSaVHSMAaDIAaDIAYS6KoJSqkZMASiIAkkbLKTXKKDX29vYAjEMAi0LCKDMAezmwJDCuIy2RGyaOHCRQDxYAPBY1CQn///8AkkbOKzep2sDuur6MaO/aAAAAPXRSTlMACxgOFAjaGhnG9dfFqaY08uzVwWP7+vDw7+3lyr6po3h4d3RfV1BKR0I/Pj0t++jSwburoGxrZUM/IyIdvBiRZgAAAP5JREFUKM+Fk9d6wjAMRj0DCSEQNqWsQpndZQ8b3v+lCMFAgq3w3x5Ln20doXs4ZSQIoxzpwalpx/vNZIpe7yONNVhyq+X9JTW7Hz+AP9uOOOxVjtKf5SKcjiwholjKnwG90fcX8Yjl91DV44kldCwbqn+qJUxYZtNhcaluxvk+Phe/CjOWdlDOJw6E/RVHtCsgXHmjiLVALLMMERfGNkHEgnHhGU5s3iSItROvRrtfIA4exsd1COfXPPlTw5E4wEiWOBzoPzDQnRLNqEPhqhseGWTyB/gum6ZiY0gjqo7/YiJXmrm46Nu5W1W0XLMXG21PyLTnFc9L1NGWCFzBE0g7jyRTbhVgAAAAAElFTkSuQmCC"
                  alt=""
                />
                <span>意大利语</span>
              </div>
            </td>
            <td>
              <div><span>印欧语系-罗曼语族</span></div>
            </td>
            <td>
              <div>
                <span>意大利、圣马力诺、梵蒂冈、瑞士等国家和地区</span>
              </div>
            </td>
            <td>
              <div><span>6770万</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAOsSURBVHgBvZdbaBNLGMe/mdlNE5PYpm2UhnpOc47tOW05h5bQnp5UBBW14oOIivikL1q8VJB6efHJB0VExIoKXvCC0oeIFxQVC4o3LGqLBmyrtrVpab3EtqbmutndcSYXsRI11SQ/+Jidnd39z2W/me9DkByImZaZGDPMjMTaFGYqM4lZmFmIGU3mg9+DC+jMAMaVOUV/F4raGiMW/xUQsrAXp8RU38kUhvyK3N6jeFubR/u73QAfWVMg1qEJCfP7ut8BstfnlcydqtGtIYDKEEVG1iIkfIMyEHgVlTpfy4Ejh4dftLgAPLEO0GSFDYsNU4sWTpqyWYfJEkDIABOCjgQU5XJryHPgkqf/OZsB39fiJEFHsrflFtln6swnNZjMYaIamDBIJ2JcMY1o/7eKxld3giNvILr244Q+X+fn5xt21y1dYHo+cBABzYcUoAJy9+jQqq13rtxmVT/ERv6l8KTmZkd13YK6Y6Io/gkpJCzLQ2dOn1jU0NDwDKJrHvlrI2VtbW3OrDmz16ZalCMKgmXZsuVbKysrTXHN+Ij17e1PlheXlOxFCOdAGmDz6+vserah2mZzsKqPqyObzTbZarXWp0uUw0aoL55esrq0tHQyr3Kf1FZUzCg+57he/uP95NeQZbmsvLy6rLOzc5QLC3dvP7U/fPBSD+nHEJIC1ax8yKdaIxBNBWQGgWDhH67JhTEiuBAyBCZ4Gi+ipwwFM2QMxF2KxP1YhgzDhVUK9D1kCEpVrqVGhBGFQcgQVKVDcWFJkcNOyNB0UyXczjW5H4dVNfCowPKbl/1kadu5oiBvb0/XI67JhYNGk9TR7Nj/MkuTVQVpJCyFOuz2mhdck081bWtrG+vrdR2D6HmZFigFT1/fwFG2XY7xatydAo3bt131eb1XIU34/d6WxsaN1yB2HsdDH9rX3S2bTNnOqqr/5mGMcyGFSJLUceG8Y0tTU1M/RMPg8aEPM33TynX2MiqeBVlJSejDduf3byzmNZuO729xu92fg75E52D2DvNf861Etwsj9Af8Agqog13Bj/U7R3vvsWpkbeNtJMHz0lP/8EChkPU4l2RZmHgBimYPScO+LjEfvXnDP1x/yON6DNEAfxyJhPnqS/eDnrcBJXirQNS6NIjkEYS4j38z1GW7n0wx9YQpdY4ooT0Xxgb2XfS5X8E3PCXJFEZvXGHKm24lhhojEWwCwiyFoZEUhoWv71SqDvpl2elS/K2nPri73OD76RQm0XMpTdo+AX3DXJ4ytcWSAAAAAElFTkSuQmCC"
                  alt=""
                />
                <span>泰语</span>
              </div>
            </td>
            <td>
              <div><span>壮侗语系</span></div>
            </td>
            <td>
              <div><span>泰国、柬埔寨</span></div>
            </td>
            <td>
              <div><span>6070万</span></div>
            </td>
          </tr>
          <tr>
            <td>
              <div>
                <img
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAXUSURBVHgBrVdbTFRHGP7mnL2wV1ZBuoCARbYWaFFCrFgjbazQqo1p0qRJtbamEeND9aEtD029tPbBtDW9aCpqTVprjQ80mqjhoab1hr2AlsgiglYUBQq7COyyu3DO7p7pzGFXUXaX7eWfTOacmX/+b/7L+ec/BMkRYV3Pui7SBdbFyFqYdYV1OdIl1mkyAhMRBzDkpcO66z08Ps+BBalWlOi0yBIEPMIZKEW/JKN3cBDNF9vwa80XuNE1AC9bGo0c6B8B83lD6RzYvt2Oyjm5qNYIKBIILGxFE2cPZc0nhdBy7Q6+XrsVp5o7MBw5wCQLiHGEmLevR/6+97FlZgbeZaAFhMDAQAXEJ8KaXiMiN8OGitXLkJOXjZu/t8MbCCA4mXnyu+Xkbiysmo/dTIgD/4HkEJyNrdhSUY3T7NUbD5ikp8Nc/zGWlT2BPURAWkKpJGJxGkrIpihw/9yEtVVv4Rx79SNi9ommNh7ahqcWl+FLjQbZmIpM5Sy+85haXQnZmItMeZl41p6On+obMMSmVLNHfSYsYoG0tBwbWMTOxlREtEDqCsC2cvx5ChJFZL/2Amp4sEYxo8CGvR9hmdmIKiRDIttvXgxqrmDP05PaYjFh+aEPVPmGKDApzUFqQTbWM4fbkpKiL2COKQJJYaN+DpIkkyMP1YV5sCISIXr7WrvjQ5+heMp0gvFv5hlLJaoimp7VLMWp4V4oNDzlXkppkf3NYNHVbT1DHFjXmztjoVvSmZAEaQUtnrcuYUEzfkrCzN0QPIVAKJDMdrOcI7Go7GlSgUWrWDpxVSfoME03bfyUvFGKaEvVpaLQVniPt9hWBLvBDo/sUa2hNjI+chqWhyEpUpRdI5jEEg7BgQX60OeTZczGmtlrUGGvgJ4dIqSEoTY2cnnTdfcDKi0lHXsW1qpfp0hEiIIIDRtlJYiG/gZ8d+MgOkc67/ELGpKlDuDfMiEzJgLf8t3Ep62foHWoFRuLNsKisyAece3S9A/mGm/Qi33te3G8+ziksPTAGhUJN6U4/jkRTEo/Y+ExHLt9FKvPrsL5/nNM68QZihPnudB/Aa+fW4O6rrpJoBOJa6wQBQPxrou+0T7suLwDK3NX4tX8VaqPY5FrtB91N+tQ31MP95g7LiDCdIBjCuqjTLvj8fGAcktuHO48jEsDl+LKczK3cC1dYy51T1x5stLDMTmwHAqEnWxMaEuL1oJZlllx1x1WB6xaK6Yixa80c0xuatl22d9UmqHzsUCJm7lyix3IMeVEjk2heEfUUWAlCb8JMo2ZeFEqQZuzLwEq9Tlv+RujwJLrQN/Vmpnp1/WCOD/mBnZdWXe9oiYPfs9Jjc0I7N7PownGTdXQPz1fXXtj+kvwHjnP5mMbT1aUtue6+//kmNzUtCMQ8NySpQPMNzHTj5ifB+28J0ElCaM/nMDI25sR+sOJUMsVjLyzDYEjx5jvgtAUPgZNwaMxQVkS8nQGAwc4Fn+9VyleG/O4Vlgy8vWCUPTwJv3ypdDOLYb/s1oE9h9k1/no/UV2mOAvjQi7B6AtLQEd8iDU7JwE7FeUk5t627/qCoUGJwLTO6FQ0ECJs9xsrWTp7n5q0mqgW7QAgdpvIJ+5wI4Yo3Bk5g+3dSDYeAlioUO1Bp+LUghK2wnvQE3tsJtXDbwEfrD0Yd10OLNg0RJr2vciEdLVWVbHkpQU5oSkLgEQg4GZnckOj99WYUrdjf7hDeu62390xyl9OMlHfYMDldZpHRmitkwgLL2xyEUwiKSJBxalEU1pb4PPs+7lnvaz7Ng+TChzY+UruWnYdTs3xXwxU6vPZqWtnSRT30wghek8qtDTdR7X+nV/Xb/IpkYe5omZKO8yHY+O3O13+YJnHAZTl0kQ0jSE8FypRwJdmVc9shJu6ZLHdu7ovvP5Tk8Pv5Zi+ii5Xxij0bo1debsuUZLuU0QynQgWSIhGZwhDOoKUvR4wuGWK7L/t82Dtzu6AoF//QsTi+9//Wn7G2RhRCjUnxXpAAAAAElFTkSuQmCC"
                  alt=""
                />
                <span>缅甸语</span>
              </div>
            </td>
            <td>
              <div><span>汉藏语系藏缅语族</span></div>
            </td>
            <td>
              <div>
                <span>缅甸、孟加拉国、马来西亚、泰国、美国等国家和地区</span>
              </div>
            </td>
            <td>
              <div><span>3200万</span></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.priceform {
  overflow-y: scroll;
  width: 100%;
  border-radius: 10px;
  max-height: 509px;
  height: 80%;
}

.priceform::-webkit-scrollbar {
  width: 8px;
  z-index: 11;
}

.priceform::-webkit-scrollbar-thumb {
  background: #bd0507;
  border-radius: 8px;
  width: 8px;
}

.priceform::-webkit-scrollbar-corner,
.priceform::-webkit-scrollbar-track {
  background: transparent;
}

.priceform::-webkit-scrollbar-track-piece {
  background: transparent;
  width: 8px;
}

.priceform::-webkit-scrollbar:horizontal {
  height: 8px;
}

.priceform table {
  border: 1px hidden #dadada;
  border-collapse: collapse;
  border-radius: 10px;
  border-spacing: 0;
  box-shadow: 0 0 0 1px #dadada;
  position: relative;
  width: 100%;
}

.priceform table td,
.priceform table th {
  border: 1px solid #dadada;
}

.priceform table thead {
  left: 0;
  position: sticky;
  top: -5px;
}
.priceform img {
  display: inline-block;
  margin-right: 5px;
}
.priceform table thead td {
  background-color: #f2f6fb;
  text-align: center;
  img {
    display: inline-block;
    margin-right: 5px;
    display: none;
  }
}

.priceform table thead tr:first-child td:first-child {
  border-top-left-radius: 10px;
  width: 110px;
}

.priceform table thead tr:first-child td:last-child {
  border-top-right-radius: 10px;
  width: 80px;
}
.priceform table tbody td {
  background-color: #fff;
}
.priceform table tbody td:nth-child(1) {
  text-align: center;
}
.priceform table tbody td:nth-child(2) {
  width: 40%;
  text-align: center;
  img {
    height: 35px;
  }
}
.priceform table tbody tr:last-child td:first-child {
  border-bottom-left-radius: 10px;
}

.priceform table tbody tr:last-child td:last-child {
  border-bottom-right-radius: 10px;
}
.priceform table tbody tr td:first-child div > img {
  display: inline-block;
  margin-right: 5px;
}
.priceform table td {
  color: #333;
  font-size: 12px;
  height: 70px;
  padding: 0 10px;
  text-align: left;
}

.priceform[data-index="language"] table tbody tr td:first-child > div {
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
}

.priceform[data-index="language"] table tbody tr td:first-child > div img {
  height: 30px;
  margin-right: 10px;
  width: 30px;
}

.priceform[data-index="fee"] > div > div,
.priceform[data-index="language"] > div > div {
  padding: 2px !important;
}

.priceform[data-index="club"],
.priceform[data-index="currency"],
.priceform[data-index="event"],
.priceform[data-index="monitoring"],
.priceform[data-index="secure"] {
  overflow: hidden;
}

.priceform[data-index="club"] > img,
.priceform[data-index="currency"] > img,
.priceform[data-index="event"] > img,
.priceform[data-index="monitoring"] > img,
.priceform[data-index="secure"] > img {
  display: block;
  width: 100%;
}

.priceform[data-index="currency"] > div > div {
  align-items: center;
  border: 1px solid #eaebea;
  border-radius: 10px;
  color: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px 0;
}

.priceform[data-index="currency"] > div > div > span {
  font-size: 32px;
  margin-bottom: 25px;
  max-width: 754px;
  text-align: center;
}

.priceform[data-index="currency"] > div > div > div {
  align-items: center;
  align-items: flex-start;
  display: flex;
}

.priceform[data-index="currency"] > div > div > div > section {
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: 20px;
  margin: 0 33px;
}

.priceform[data-index="currency"] > div > div > div > section > span {
  max-width: 335px;
  text-align: center;
}

.priceform[data-index="currency"] > div > div > div > section img {
  display: block;
  height: auto;
  margin-bottom: 15px;
  width: 472px;
}
</style>
