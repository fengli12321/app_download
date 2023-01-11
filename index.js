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
        }
    },
    methods: {
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
            return `itms-services://?action=download-manifest&url=https://appdownload.qiyou.cn/${app.code}-v${this.version}-${env.code}.plist`
        }
    }
}
Vue.createApp(config).mount('#app')