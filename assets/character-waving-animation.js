

class CharacterWavingAnimation extends HTMLElement {
    constructor() {
        super(); 
        this.initLottieAnim();
    }

    initLottieAnim() {  


        let player = this.querySelector('lottie-player');

        let animData = '{"v":"4.8.0","meta":{"g":"LottieFiles AE 3.0.2","a":"","k":"","d":"","tc":""},"fr":12,"ip":0,"op":60,"w":130,"h":278,"nm":"waving-animation-setup","ddd":0,"assets":[{"id":"image_0","w":36,"h":30,"u":"","p":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAeCAYAAABE4bxTAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAClElEQVRYhe2XvY3cMBCFvwOcOVF4mVWCSmAHVgkqQSWoBJXAEhYGnAtw6kChAwcKHa4BB5etA5Lm41C32jN24cQDEFiRQ87jmz/uE8figB5ogQWYb9jzEGkAD1zMGP8VmFVATHFcgOHOtlqxcxOYBGAjuOze4o8AqYK650K4zT3Fia3znsIoCiezdi8wjuAFCIxrWBTSEFAmtEcApqi3AJ3MDzLfGyCbAFAwZwH5R2ZRsKndkQN7IrC3l33dzvy8Mz8acJMFo+zYWJl2jOjYIsDVnHEmxONijA/UsVOxMxgFlZaSbjWaDIzUQCey+2xc2pLSEJh0yagzh1nx1H5PAGdjIIE+Gf1LtGMvnwrwqgatj5VCL/P290zNzGKM6gVsaExkFjUxgNLPa1ROcZEO8UbHxzUFsEWgZ0pXbztMpvMrMJCbp27w5BhSN2lMpMPU2CrzPdk9swGv+wF4egVYK+h1fgC+Ac/Ad+BXXOvi3DPwA3jZu7HIe+AT8MUuvNtR3sh0u2isBT4cGHmL/AQ+7y0oQw2B3h74eOWglXCRr9QlYovjSA71Rsro3wj+7ikzKbGV0vohokXtTMiu1IOScW0nPWWP+lvpya1o0AVHXX2nuLYI0CZunGXfRs6SkbLRjpQ9yhFY9dQv0erpoc9VH+cGAzAVzyWur7KmLDvzjQFgLz9yw9PGPkUayhrlDFg1Yqt3L79X6uJ4k0zGoALw5sabub2CWwwAy05qU8ndh+xcCHQqAAVnG64d6roTtXsTSM/OEySJPQQBaN88K6VLFmHM6jquJ9CrohQPBpB1UUd275nyL41lz8aOnnFV9pQHciw15KxDvtv4PRNcoM11imd0BqQ/AoPZ8ChxvOFfTEMuYP/lN23arcyA1VVfAAAAAElFTkSuQmCC","e":1},{"id":"image_1","w":51,"h":11,"u":"","p":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAALCAYAAADSiLXqAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAAn0lEQVRIicWTwQ3DIBAEx8gFuITrJC2kBJfgElwKpVCC0wkdJI/4kUiJgIWTV7oP0sAAdxMQAaM9G3AIXCkR0Wc+wZsALwJTE0P0CYNFLk1AbxWPFuvZ9whAEsAHkMVDS0kC8+WTgWdDbV265XT57A1gxm/4h/gs1L/G7nyRIT73CtBr6F18Vv6/SMK/vbp8ph8bGO+vs4+1eNYVMSp9XhnJdUfFoSaZAAAAAElFTkSuQmCC","e":1},{"id":"image_2","w":57,"h":19,"u":"","p":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAATCAYAAAAqL6XVAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAABLklEQVRYhe2UvUoDQRRGTyazP7hrjKIJkkYCgoXF1tuksvIN8hR5FB8hlc+hjZWFpYJiQEGyxYJrIhtcdyw0XdLMbExI9pQD9/B9l8tUWFG6YftCoAJTT47qyQJl/cubQd/UM0WgAgUdY4+gLguTIa5MHYtCLDvAf1CWXBfKkuvCRpSUANf3Q17jTy2B50g6J032PKfQYE/Rx/7tc8zXd64136i5nJ0eAiCiJPV1CwKMJxkv8Vh7fh4Pb0lLtyBAlKQM31MARKPmjqyq2dX6jmU0P4v6lm20Oasq8F0J/J3redBilGZaMlsKdj3bJM9MwuODx3Zju6U777sSz5GA+i3pOdOH1aK54xbi2YjftSy5Lsgc1ROCuqkoy9SggDwLobLsAPPohkdBEcuXkrsfji1KJSXVvHgAAAAASUVORK5CYII=","e":1},{"id":"image_3","w":51,"h":22,"u":"","p":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAWCAYAAABtwKSvAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAABBElEQVRYhd2Wbw3CMBBHH1VQCXWwSagEJEwCEiYBCUhAQiUgYRKGAvjAIPzZSHu9A8IvuezTa98113QrXhOAfvpes5vqGwkIfTpgBE4zlQCvppgXsc96Abqvg5m2oo9n+QSeqzdsQMWnzwRP0ybW41blk3sK19oYNyP2yZnNT94dsY8DomDDBrtRiwKmAbwDWuGmUs5q3dapanw5jseX9RcSpKADBjUNnQxS8O/GbBSyUs5q3dFx+WErzRG7tyYJmJtPoPyR2tX5vk21TyqEo2Ez1T6xAEymbSj57DNhq5df1cdzuUTvwM7SXtvHA9sZaMD+nlT7rBYWCTz+ViQ1PVkCGT5nD4cIioHKr2oAAAAASUVORK5CYII=","e":1},{"id":"image_4","w":58,"h":95,"u":"","p":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADoAAABfCAYAAAC5gtTBAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAE6klEQVR4nO2cTW7bRhTH/5FkWjVVW3QQeeOghNJ14yKrrOob1Deoj5DeQEdIb+DeIN13Qa28KhAHKCCgiavWQQzJiBUppmPTspKFPswZDqWZ4TyRAfgDCIFjzcef8zjz9PhoICcnJycnJ0eXe2kPQIA7OcK0J4c2aQjdnXy6k2N38vndgnpNAA0AHsGYjFAF8BzABwCfDRyNpY5ekh2MTc6EwMyKdaExiyvFwufaenl2OLYV9909lcFQ3qMegJ/4Qnu1BHu1BADY2ijDKhXhrFnY2ijHNnTcvcDh6zO+uI+7i7mQktSQ1dkHJ7Jeq+CJex9WqaDcWL1WAQBe7AaAZ5A0Y/Ve5dgPnzi2haffP9ASOaVeq8wEh3gmW59CaBXcbD5x7xtpWNDOBu62q7lQCGU6tldLc+8/FaxSAduba3P7i4NC6E74xJTIu/a+mdtfHFT36IzpCmsKZ83ii6oy9chN17FXCbpQh3xGrSJ5F1JkYxRL4KsTGtyOtOp9dUJ7/jVf9FKmHrlQ3RmIo+cHfJGUr0shlLnCghlIhECoJ1OPQihzhf3robGGe34gas+TqUshlOn45P2lsYY7gyu+qClbl9x0b25HOO5eGGm49a7PF72QrUtlun+EC950PyZutNO/EpltqkKBcTBsRndwlXhWX530+KImFEKgVEI9cPePYKDSnJxfohu9P5+LvhsH5T7aCJ/410OtWfWvhzj8JxIvOoKC2QK0Qj0Av4cLOoNPSg0EwxGarQ5uok6HdAhlCrVn1A6fBEM1L6l12hc5CL9BI1pPLZSJvQqiA3NpvRvwRUfQmE2AVqgL4HG44GE03hNLzw94k+1DMj4kglIoc+Ud21IKqwjM/CUkHXgRlEIZs63XviXsajFUQnfAPQZUMVsKqIQyZltbLxuPBqpCJZQx20caZtu7jGwrbf3h0Ajdw/hRwQxBdH0hwfCWL2prjwg0QvfDJ/VaJdHDJVOYHkEVwM/hgu1N23AXepgWytybK8VC6qvtFNNCmdX2UfR5ZmqYFOqCc/nSdhLCmBQacfkcO/LkSxrd+G0cJoUadflifF1tTAndA+fy1R9k5/4EzAqdsb25lom9M4yJ0VQB/BIuyNIiNMWE0MzunWFMCCXZO7O26rog2jsFkb9UV12jeyclSYVmKlwyjyRCyfZO1fivDEmFzjC5dwoWoqOkbeqObNl7Z6IVF9AXSrp3mk7wAPSF7oZPTP/u1E2xmYeuUCajsqb4TGURN9HFKDXTZZyErXWzqarn0cUolRllZnOlWFjGL5VUZpTJj6XwhEz7uUBGcwFN+7lABoUKZjOSXKRD5oReRHOJEs8mkEGhgj20baJdHaHMwiDI/0lEpx9pL7UZjXQsGJwWwXAkunCeibZ1TZfJ9Ts+S57rBwBvzyOZoP8h5XuUydo67l6IVktlBGl0Stlh89AVegBu2T98fZboB3PrdCDK3jzQbpAjyarLxIt6foA//z7VmtmeH+Cvf9/zxU0YMlsg+YuyHgQvw9ZrFfzw0JFK0GidDvDq/57IG/oRGRJaxVjsY9EfHdvC1noZdnmFeacsuB2h2/+Ek/PLuJz7X6GYproMpmJNvah+sMzB69BA8n9B0FjymLWpYrxItaEm0IPke6C6UL6172I8+OnBv+fZxnixeQFD/mxOTk5OTk5OTk5OiC8rh793eBsoNgAAAABJRU5ErkJggg==","e":1},{"id":"image_5","w":121,"h":164,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_6","w":36,"h":42,"u":"","p":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAqCAYAAADbCvnoAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAADWklEQVRYhcWYMW/bRhTHf1Sp4QbbKmEbhTXIsWmAKAREWoRszmKwY7plbL9Bs3Wrv0HyDWJ/g3TzyMkLB1kbBw/SYLvQQDPgQMEgqA4npgpzpEhKcf/ADbx3d/rr/d+7e3caEj3gHGgB40W7WbQx/wMCYJ7TxsAF8Oa5yLwuIJNtAfABOPzepIo8lNcuviex32qSmvNf7G0E2vLH2dlZLwiCYRRFhGGI7/uEYVhmnQkyxm42SgjAtu0x0Em/oyhiOp0ymUyIomjVer8jpayNH7IdJycnPeQ2AECz2aTVatHpdDAMg9lsVkTsDfAC+LQxQkdHR2ia9lY1WAhBu93GMAweHx+J41g1rLcOqW8kA7Bte75qYhzH3N7eMplM8oZcIpOlEr7xEIBpmn3AKprYaDTY3d1FCIHv+yRJkh3SA34ErjZB6CfglzILbG9vs7e3x8PDg4rUK2QGls6+hqpT07RK+m9tbTEYDNB1XWX+yFKS1CJ0dXU1BkZVSfX7/TyzQ8nNU0loaZFKMAyDbrerMu2UXS+XUFXZUrTbbTqdjsr0EnkwF0KZ9ils2w6Q/64yXNfF932V6VcK9qgiyWp7CaDf7+cF+QUF8VRIiBpxlELXdQaDgcq0Q10PzWaz2h4CmXnHx8cq0ynwR2VCjuMEVEz/LEzTxDAMlek9iv1plWSwZjkB0O12i+LpK6wklCSJsy4hIQSWpTwaX5KRrjDtU2SLtroYDodMp9Ns92ekdGMoJxmapjnrkgGwLEsl3Q5L0pUilCTJWtmWQgiBaZoq0ymLe18pyaBc0VYWObv4BDgs5aEF/t4Uof39fVV3B0pKtoCzCTKe5+F5nso0qkRonXMNZA3uum5RDT6GCjEE9dM/DEOGw2HR9ekSuR8Fypo6B4dCiG4cxz9HUUSz2aTRWO3gu7s7RqMRT09PeUPeAX8CM6jmoXPgr/QjLVmFELkTPM8rkugzMtWd5c4qQf0VwjDk+vpaWYSViJcRcnd2soYqkr1etC9IkoT7+/sv1+2UqOu6RY8Ul8Bb4J8Kv61Eet4on2UODg7mlmXNdV0verpR1kDroIV0c9U3pICMdzeN8wpkbniGJ0CQGbLq1e2CDb6ulUEP6YFniZeyaCFvEc8WL2XRQxJZS6J/Ac2nWskE0+OEAAAAAElFTkSuQmCC","e":1},{"id":"image_7","w":108,"h":158,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_8","w":51,"h":89,"u":"","p":"data:image/png;base64,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","e":1},{"id":"image_9","w":29,"h":105,"u":"","p":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB0AAABpCAYAAADGICjYAAAACXBIWXMAAAABAAAAAQBPJcTWAAAAJHpUWHRDcmVhdG9yAAAImXNMyU9KVXBMK0ktUnBNS0tNLikGAEF6Bs5qehXFAAAFbUlEQVRogcWaT08bVxDAfzivxsZegwlZNyTILo1Uo8okUU/hgqVUCrdy7C0+9APkG5R8Aw699dDkG+SYQ1W5p1wSibaKxIESohTSWClxEa4DOLiHxS6s5+0/7ysjrYD3dvl55s2bGc8+OGepAo+AVaD0fwBLQPfU1QSWTUNXXNDe9cAELHHys6mZvwusARMm4BNAHVnbnrlvmACTz+e/8wFXY4cuLS1VFxYWuul0WgfuArXYwXfu3Onevn27a1mWMXBCGlRKsbCwwPT0tO65HxjC1CK0J5VKxQv8iIjO5Qn1AY/jeHzo7eQLDQB+FAf0ZUjwIk5Eiw7tdrtbupvn5uawLEua+pYQ6xvIvD1RSnHz5k2UUtL0qhEoQDqdplKpSFOLBNy/oaEAtm1j27Y0tWIMClAulyUzFwmg7QA0kUjUg0DT6TTFYlGaWgkNDSOlUkmnrWfVMRRUKaXTtmYMCo62gnyFR3E3NFQppYtUWhNL0K2wYI2294xCLcuSwmMRTc4d2rx9QgiHig1aKBSk4WWEfBsbVCklhcZxBIeKDQpw5coVabjmC338+HE9KtS2bSlCLeLas7Fq2gMLcsbEsUM1DnVmzxrRNJ1Ou4eLnCpnYof2wILU/KBiRRhUNF7cX1cR6lURBhHLsnQmrmqhcYgm89SMQdvtNp1OR5paBhAL2KjSaDTY3t6m0WjobhkHqkND2+0229vb7Ozs0G63gzyyJUITiUS92+0uej0ZQCu3/I0TJGSoTiJoBc72W8VpDzUh4JpG0Arg4Qmo7p7QQuPSKqhULctaR9/k0F0PwkDOACPAelc9KMQdHKp+D8zaWb78/GNpqhQU6l5TcR0yo4rydI7ZS1mSyvmc+UySd63D07eJ5WAQ6AOcULUIjlazl7IUxlPiB3FBwcmZa2GhTaA6X5z85rNC9vueVpLkM0n+2P3HPVwKAhX/6/xMbsMLCJAdFXdboGZH5CyTkaElo1BpnY1DAT66MPC4Z5KIBZrPJKVh317hUNBJGerrTMOZV/Zws9BCTnQms+bNpsRtUzUKjbpXhy5BBQ/2DfxDQzXaejqTCU3Bx8RDQ6MEflPmLRmFnot5NXnXM/DH8q3NDhmZYoFqIlPNKFTjTCto1jYW6Kd2VhoeR9PPj03Tyoy4hHcREkBsX//nZyZ0Zq4ZgwLcujYlDd/FZG+wMJ7SbR+zvUGNU9VO/xG60fHsxS7rr/cAKF/O8cUnk2fmZ+0sT1/scvTh+PTwdZxg0YSQmm429vtAgPXXe9KXKGYujkmPV3u/hILuHww2pA47xwNjmoLNbBdUk3mq5wHtRw9jDUlBrhuHavZreOiR4DRRJDC0ddDh98b+wLgml4pbqSeBgsO71iFPNt66NzyZUaUL8gP34jQk/aGHnWPWX+/x2yu54zYvpzOdlv0GiBtaBfjp+ZulxMiI1D3pSz6TZFaOszrolhs6gXPwZRFg5513AzKfSeq6ZgC82XsvDQ9oeo+A/YKrk2PcujalKz0BePWXaKG6BPWUzKji1rUpXVelL5uNfcmJXuLS9AZOESXK1ckxypdzvrCe/Co73ZkzSwqhKLZzKcrTOQq5lKcZ3bLZ2KclZCJcJ3gUQrU2c3GMmUkxJ2qlddDh6Ytdaeohrpf7ohr5MTFLaOWwc8zP6w1pLUGofRMIPV6Ny4vSOujw4/M/dXvzPsIRhgtAClfh1DiBZlNKu6atgw7PtnZ5svGW90cfpFt+Ab6WJkZOfjbReHA+k6SQS/UbVUedY97svfcM6Dhb5AY+byxqRH9h4L7WCHHIbTUGYJ0IhxeXcRY+LGyLGE7DLuO8RPD6AE3+e9EQSkb8bwEGA8gaIV9rnbv8Cy1I0TOfP+Z0AAAAAElFTkSuQmCC","e":1}],"layers":[{"ddd":0,"ind":1,"ty":2,"nm":"GT_LOGO","refId":"image_0","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[54.773,163.941,0],"ix":2},"a":{"a":0,"k":[17.783,14.595,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":61,"st":0,"bm":0},{"ddd":0,"ind":2,"ty":2,"nm":"EYES-HALF-OPEN 3","refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[55.785,82.48,0],"ix":2},"a":{"a":0,"k":[25.25,5.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":50,"op":55,"st":11,"bm":0},{"ddd":0,"ind":3,"ty":2,"nm":"EYES-CLOSED 2","refId":"image_2","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[56.118,79.536,0],"ix":2},"a":{"a":0,"k":[28.25,9.25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":43,"op":50,"st":0,"bm":0},{"ddd":0,"ind":4,"ty":2,"nm":"EYES-HALF-OPEN 2","refId":"image_1","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[55.785,82.48,0],"ix":2},"a":{"a":0,"k":[25.25,5.5,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":40,"op":43,"st":0,"bm":0},{"ddd":0,"ind":5,"ty":2,"nm":"EYES-OPEN 2","refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[55.785,77.23,0],"ix":2},"a":{"a":0,"k":[25.25,10.75,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":55,"op":95,"st":56,"bm":0},{"ddd":0,"ind":6,"ty":2,"nm":"EYES-OPEN","refId":"image_3","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[55.785,77.23,0],"ix":2},"a":{"a":0,"k":[25.25,10.75,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":40,"st":0,"bm":0},{"ddd":0,"ind":7,"ty":2,"nm":"ARM-UP 2","refId":"image_4","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":1,"k":[{"t":13,"s":[0],"h":1},{"t":17,"s":[-29.534],"h":1},{"t":21,"s":[0],"h":1},{"t":25,"s":[-29.534],"h":1},{"t":29,"s":[0],"h":1}],"ix":10},"p":{"a":0,"k":[98.808,150.42,0],"ix":2},"a":{"a":0,"k":[26.213,66.25,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":12,"op":33,"st":0,"bm":0},{"ddd":0,"ind":8,"ty":2,"nm":"HEAD","refId":"image_5","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[55.325,71.695,0],"ix":2},"a":{"a":0,"k":[60.05,81.535,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":61,"st":0,"bm":0},{"ddd":0,"ind":9,"ty":2,"nm":"SHOULDER-UP 2","refId":"image_6","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[93.945,140.19,0],"ix":2},"a":{"a":0,"k":[17.81,20.82,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":12,"op":33,"st":0,"bm":0},{"ddd":0,"ind":10,"ty":2,"nm":"BODY_COLOR","refId":"image_7","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[51.895,200.08,0],"ix":2},"a":{"a":0,"k":[53.96,78.59,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":61,"st":0,"bm":0},{"ddd":0,"ind":11,"ty":2,"nm":"ARM-GOING-UP 3","refId":"image_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[105.508,162.914,0],"ix":2},"a":{"a":0,"k":[25.045,44.305,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":33,"op":37,"st":25,"bm":0},{"ddd":0,"ind":12,"ty":2,"nm":"ARM-GOING-UP 2","refId":"image_8","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[105.508,162.914,0],"ix":2},"a":{"a":0,"k":[25.045,44.305,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":8,"op":12,"st":0,"bm":0},{"ddd":0,"ind":13,"ty":2,"nm":"ARM-DOWN 2","refId":"image_9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[95.68,174.225,0],"ix":2},"a":{"a":0,"k":[14.325,52.255,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":37,"op":61,"st":37,"bm":0},{"ddd":0,"ind":14,"ty":2,"nm":"ARM-DOWN","refId":"image_9","sr":1,"ks":{"o":{"a":0,"k":100,"ix":11},"r":{"a":0,"k":0,"ix":10},"p":{"a":0,"k":[95.68,174.225,0],"ix":2},"a":{"a":0,"k":[14.325,52.255,0],"ix":1},"s":{"a":0,"k":[100,100,100],"ix":6}},"ao":0,"ip":0,"op":8,"st":0,"bm":0}],"markers":[]}';


        player.addEventListener('rendered', (e) => {
            player.load(animData); 
            console.log('rendered!'); 
        }); 

        player.addEventListener('ready', () => {
        }); 

    }
}

customElements.define('character-waving-animation', CharacterWavingAnimation);