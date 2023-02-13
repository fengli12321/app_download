const config = {
    data() {
        return {
            appList: [
                {
                    name: "手游加速器",
                    icon: "./src/qyicon1.png",
                    label: "a1",
                    code: "MobileGameAccelerator"
                },
                {
                    name: "联机宝",
                    icon: "./src/qyicon2.png",
                    label: "a2",
                    code: "QYNewOnlineTreasureIOS"
                },
                {
                    name: "六毫秒",
                    icon: "./src/qyicon3.png",
                    label: "a3",
                    code: "MobileAcceleratorOversea"
                },
                {
                    name: "LagoFast",
                    icon: "./src/qyicon4.png",
                    label: "a4",
                    code: "QYIOSLagoApp"
                },
                {
                    name: "海豚加速器",
                    icon: "./src/qyicon5.png",
                    label: "a5",
                    code: "HTMoblieGameAccelerator"
                }
            ],
            envList: [
                {
                    name: "测试",
                    code: "Debug",
                    label: "e1",
                    icon: "D",
                    backColor: '#3c3c3c',
                },
                {
                    name: "镜像",
                    code: "PreRelease",
                    label: "e2",
                    icon: "P",
                    backColor: '#409EFF',
                },
                {
                    name: "正式",
                    code: "Release",
                    label: "e3",
                    icon: "R",
                    backColor: 'green',
                },
            ],
            version: "",
            selectedApp: 0,
            selectedEnv: 0,
            key: CryptoJS.enc.Utf8.parse("1234123412ABCDEF"),
            iv: CryptoJS.enc.Utf8.parse("ABCDEF1234123412")
        }
    },
    methods: {
        downloadApp() {
            window.location.href = this.downLink
        },
        
        Decrypt(word) {
            let encryptedHexStr = CryptoJS.enc.Hex.parse(word);
            let srcs = CryptoJS.enc.Base64.stringify(encryptedHexStr);
            let decrypt = CryptoJS.AES.decrypt(srcs, this.key, { iv: this.iv, mode: CryptoJS.mode.CBC, padding: CryptoJS.pad.Pkcs7 });
            let decryptedStr = decrypt.toString(CryptoJS.enc.Utf8);
            return decryptedStr.toString();
        },
    },
    computed: {
        buttonTitle() {
            const app = this.appList[this.selectedApp]
            const env = this.envList[this.selectedEnv]
            return `下载${app.name}-${env.name}-v${this.version}`
        },
        downLink() {
            const app = this.appList[this.selectedApp]
            const env = this.envList[this.selectedEnv]
            const a = "BFDCBD92C944F09A10DA18807635CFFA43C30592E6CA13A6812186092B8E9D2C325AC528E82284877AED51D148D8E4B28C6FA878EB2619C5C5E63D969F259E6513509006E0F8838464749ED35C65A20E"
            const b = "27E201FEC269891FA04242D78F12BDA4"
            return `${this.Decrypt(a)}${app.code}-v${this.version}-${env.code}${this.Decrypt(b)}`
        }
    }
}
Vue.createApp(config).mount('#app')