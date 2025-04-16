// Auto-generated Service Worker - 2025-04-16T14:28:26.757Z
const CACHE_NAME = 'venturi-meter-v1';
const urlsToCache = [
  "/192x192.png",
  "/345677.png",
  "/512x512.png",
  "/GraphVen.png",
  "/auto/auto.js",
  "/auto/auto.mjs",
  "/auto/auto.mts",
  "/dist/chart.esm.js",
  "/dist/chart.js",
  "/dist/chart.min.js",
  "/dist/chart.mjs",
  "/dist/chunks/helpers.segment.js",
  "/dist/chunks/helpers.segment.mjs",
  "/dist/docs/404.html",
  "/dist/docs/api/classes/Animation.html",
  "/dist/docs/api/classes/Animations.html",
  "/dist/docs/api/classes/Animator.html",
  "/dist/docs/api/classes/BasePlatform.html",
  "/dist/docs/api/classes/BasicPlatform.html",
  "/dist/docs/api/classes/Chart.html",
  "/dist/docs/api/classes/DatasetController.html",
  "/dist/docs/api/classes/DomPlatform.html",
  "/dist/docs/api/classes/Scale.html",
  "/dist/docs/api/enums/DecimationAlgorithm.html",
  "/dist/docs/api/enums/UpdateModeEnum.html",
  "/dist/docs/api/index.html",
  "/dist/docs/api/interfaces/ActiveDataPoint.html",
  "/dist/docs/api/interfaces/ActiveElement.html",
  "/dist/docs/api/interfaces/AnimationEvent.html",
  "/dist/docs/api/interfaces/ArcBorderRadius.html",
  "/dist/docs/api/interfaces/ArcElement.html",
  "/dist/docs/api/interfaces/ArcHoverOptions.html",
  "/dist/docs/api/interfaces/ArcOptions.html",
  "/dist/docs/api/interfaces/ArcProps.html",
  "/dist/docs/api/interfaces/BarControllerChartOptions.html",
  "/dist/docs/api/interfaces/BarControllerDatasetOptions.html",
  "/dist/docs/api/interfaces/BarElement.html",
  "/dist/docs/api/interfaces/BarHoverOptions.html",
  "/dist/docs/api/interfaces/BarOptions.html",
  "/dist/docs/api/interfaces/BarProps.html",
  "/dist/docs/api/interfaces/BorderRadius.html",
  "/dist/docs/api/interfaces/BubbleControllerDatasetOptions.html",
  "/dist/docs/api/interfaces/BubbleDataPoint.html",
  "/dist/docs/api/interfaces/CartesianScaleOptions.html",
  "/dist/docs/api/interfaces/CartesianScaleTypeRegistry.html",
  "/dist/docs/api/interfaces/ChartArea.html",
  "/dist/docs/api/interfaces/ChartComponent.html",
  "/dist/docs/api/interfaces/ChartConfiguration.html",
  "/dist/docs/api/interfaces/ChartConfigurationCustomTypesPerDataset.html",
  "/dist/docs/api/interfaces/ChartData.html",
  "/dist/docs/api/interfaces/ChartDataCustomTypesPerDataset.html",
  "/dist/docs/api/interfaces/ChartDatasetProperties.html",
  "/dist/docs/api/interfaces/ChartDatasetPropertiesCustomTypesPerDataset.html",
  "/dist/docs/api/interfaces/ChartEvent.html",
  "/dist/docs/api/interfaces/ChartTypeRegistry.html",
  "/dist/docs/api/interfaces/CommonElementOptions.html",
  "/dist/docs/api/interfaces/CommonHoverOptions.html",
  "/dist/docs/api/interfaces/ComplexFillTarget.html",
  "/dist/docs/api/interfaces/ControllerDatasetOptions.html",
  "/dist/docs/api/interfaces/CoreChartOptions.html",
  "/dist/docs/api/interfaces/CoreInteractionOptions.html",
  "/dist/docs/api/interfaces/CoreScaleOptions.html",
  "/dist/docs/api/interfaces/DatasetControllerChartComponent.html",
  "/dist/docs/api/interfaces/DateAdapter.html",
  "/dist/docs/api/interfaces/Defaults.html",
  "/dist/docs/api/interfaces/DoughnutAnimationOptions.html",
  "/dist/docs/api/interfaces/DoughnutController.html",
  "/dist/docs/api/interfaces/DoughnutControllerChartOptions.html",
  "/dist/docs/api/interfaces/DoughnutControllerDatasetOptions.html",
  "/dist/docs/api/interfaces/DoughnutMetaExtensions.html",
  "/dist/docs/api/interfaces/Element.html",
  "/dist/docs/api/interfaces/ElementOptionsByType.html",
  "/dist/docs/api/interfaces/ExtendedPlugin.html",
  "/dist/docs/api/interfaces/FillerControllerDatasetOptions.html",
  "/dist/docs/api/interfaces/FillerOptions.html",
  "/dist/docs/api/interfaces/FontSpec.html",
  "/dist/docs/api/interfaces/GridLineOptions.html",
  "/dist/docs/api/interfaces/InteractionItem.html",
  "/dist/docs/api/interfaces/InteractionModeMap.html",
  "/dist/docs/api/interfaces/InteractionOptions.html",
  "/dist/docs/api/interfaces/LayoutItem.html",
  "/dist/docs/api/interfaces/LegendElement.html",
  "/dist/docs/api/interfaces/LegendItem.html",
  "/dist/docs/api/interfaces/LegendOptions.html",
  "/dist/docs/api/interfaces/LineControllerChartOptions.html",
  "/dist/docs/api/interfaces/LineControllerDatasetOptions.html",
  "/dist/docs/api/interfaces/LineElement.html",
  "/dist/docs/api/interfaces/LineHoverOptions.html",
  "/dist/docs/api/interfaces/LineOptions.html",
  "/dist/docs/api/interfaces/LineProps.html",
  "/dist/docs/api/interfaces/ParsingOptions.html",
  "/dist/docs/api/interfaces/Plugin.html",
  "/dist/docs/api/interfaces/PluginChartOptions.html",
  "/dist/docs/api/interfaces/PluginOptionsByType.html",
  "/dist/docs/api/interfaces/Point.html",
  "/dist/docs/api/interfaces/PointElement.html",
  "/dist/docs/api/interfaces/PointHoverOptions.html",
  "/dist/docs/api/interfaces/PointOptions.html",
  "/dist/docs/api/interfaces/PointPrefixedHoverOptions.html",
  "/dist/docs/api/interfaces/PointPrefixedOptions.html",
  "/dist/docs/api/interfaces/PointProps.html",
  "/dist/docs/api/interfaces/PolarAreaController.html",
  "/dist/docs/api/interfaces/PolarAreaControllerChartOptions.html",
  "/dist/docs/api/interfaces/PolarAreaControllerDatasetOptions.html",
  "/dist/docs/api/interfaces/RadarControllerDatasetOptions.html",
  "/dist/docs/api/interfaces/RadialLinearScale.html",
  "/dist/docs/api/interfaces/RadialScaleTypeRegistry.html",
  "/dist/docs/api/interfaces/Registry.html",
  "/dist/docs/api/interfaces/ScaleTypeRegistry.html",
  "/dist/docs/api/interfaces/ScatterDataPoint.html",
  "/dist/docs/api/interfaces/ScriptableCartesianScaleContext.html",
  "/dist/docs/api/interfaces/ScriptableChartContext.html",
  "/dist/docs/api/interfaces/ScriptableContext.html",
  "/dist/docs/api/interfaces/ScriptableLineSegmentContext.html",
  "/dist/docs/api/interfaces/ScriptableScaleContext.html",
  "/dist/docs/api/interfaces/ScriptableScalePointLabelContext.html",
  "/dist/docs/api/interfaces/ScriptableTooltipContext.html",
  "/dist/docs/api/interfaces/Segment.html",
  "/dist/docs/api/interfaces/Tick.html",
  "/dist/docs/api/interfaces/TickOptions.html",
  "/dist/docs/api/interfaces/TimeScale.html",
  "/dist/docs/api/interfaces/TitleOptions.html",
  "/dist/docs/api/interfaces/Tooltip.html",
  "/dist/docs/api/interfaces/TooltipCallbacks.html",
  "/dist/docs/api/interfaces/TooltipItem.html",
  "/dist/docs/api/interfaces/TooltipLabelStyle.html",
  "/dist/docs/api/interfaces/TooltipModel.html",
  "/dist/docs/api/interfaces/TooltipOptions.html",
  "/dist/docs/api/interfaces/TooltipPosition.html",
  "/dist/docs/api/interfaces/TooltipPositionerMap.html",
  "/dist/docs/api/interfaces/TypedRegistry.html",
  "/dist/docs/api/interfaces/VisualElement.html",
  "/dist/docs/assets/css/0.styles.7d07a4d1.css",
  "/dist/docs/assets/img/destroy_flowchart.10814816.png",
  "/dist/docs/assets/img/event_flowchart.83015c7a.png",
  "/dist/docs/assets/img/init_flowchart.ee5be600.png",
  "/dist/docs/assets/img/render_flowchart.41a98316.png",
  "/dist/docs/assets/img/scale_flowchart.fa1ab63e.png",
  "/dist/docs/assets/img/search.83621669.svg",
  "/dist/docs/assets/img/update_flowchart.0556691d.png",
  "/dist/docs/assets/js/10.edbecfa9.js",
  "/dist/docs/assets/js/100.f7a12d8b.js",
  "/dist/docs/assets/js/101.15c56dbb.js",
  "/dist/docs/assets/js/102.33b746ea.js",
  "/dist/docs/assets/js/103.850a4486.js",
  "/dist/docs/assets/js/104.8b4f368b.js",
  "/dist/docs/assets/js/105.1a3d6c41.js",
  "/dist/docs/assets/js/106.d8f8b4c1.js",
  "/dist/docs/assets/js/107.38cf9b4f.js",
  "/dist/docs/assets/js/108.a30da8c9.js",
  "/dist/docs/assets/js/109.6d56b7d1.js",
  "/dist/docs/assets/js/11.b98e8151.js",
  "/dist/docs/assets/js/110.c44e533c.js",
  "/dist/docs/assets/js/111.ccb9a835.js",
  "/dist/docs/assets/js/112.2d2a2890.js",
  "/dist/docs/assets/js/113.5ac0921f.js",
  "/dist/docs/assets/js/114.90ef8814.js",
  "/dist/docs/assets/js/115.12a72d27.js",
  "/dist/docs/assets/js/116.6b780970.js",
  "/dist/docs/assets/js/117.79604442.js",
  "/dist/docs/assets/js/118.7752bc89.js",
  "/dist/docs/assets/js/119.d8e76ef0.js",
  "/dist/docs/assets/js/12.433f0c7e.js",
  "/dist/docs/assets/js/120.ed76595e.js",
  "/dist/docs/assets/js/121.cc3d56f2.js",
  "/dist/docs/assets/js/122.c8651871.js",
  "/dist/docs/assets/js/123.f7d5f223.js",
  "/dist/docs/assets/js/124.88ce07a4.js",
  "/dist/docs/assets/js/125.a9572036.js",
  "/dist/docs/assets/js/126.879447b3.js",
  "/dist/docs/assets/js/127.3b8478f3.js",
  "/dist/docs/assets/js/128.87d67ad7.js",
  "/dist/docs/assets/js/129.f6241700.js",
  "/dist/docs/assets/js/13.b6743084.js",
  "/dist/docs/assets/js/130.a9cb856a.js",
  "/dist/docs/assets/js/131.45e904c9.js",
  "/dist/docs/assets/js/132.abd9e4c2.js",
  "/dist/docs/assets/js/133.d5aa1db6.js",
  "/dist/docs/assets/js/134.4bfa3b5a.js",
  "/dist/docs/assets/js/135.8c7630ad.js",
  "/dist/docs/assets/js/136.f813e062.js",
  "/dist/docs/assets/js/137.6cab2863.js",
  "/dist/docs/assets/js/138.03ec5265.js",
  "/dist/docs/assets/js/139.924812c0.js",
  "/dist/docs/assets/js/14.422fec10.js",
  "/dist/docs/assets/js/140.a7967a5d.js",
  "/dist/docs/assets/js/141.34a018bb.js",
  "/dist/docs/assets/js/142.c5bfcdd4.js",
  "/dist/docs/assets/js/143.05e388ba.js",
  "/dist/docs/assets/js/144.a98bdbcc.js",
  "/dist/docs/assets/js/145.826b73e0.js",
  "/dist/docs/assets/js/146.001afadf.js",
  "/dist/docs/assets/js/147.fcadaef3.js",
  "/dist/docs/assets/js/148.604863a4.js",
  "/dist/docs/assets/js/149.6509ed9f.js",
  "/dist/docs/assets/js/15.09a69fc3.js",
  "/dist/docs/assets/js/150.fd8575ca.js",
  "/dist/docs/assets/js/151.67ecd4a3.js",
  "/dist/docs/assets/js/152.481a7bd4.js",
  "/dist/docs/assets/js/153.dbf3f3aa.js",
  "/dist/docs/assets/js/154.2aa9c67d.js",
  "/dist/docs/assets/js/155.e3367ebc.js",
  "/dist/docs/assets/js/156.a5bb942d.js",
  "/dist/docs/assets/js/157.09caef4e.js",
  "/dist/docs/assets/js/158.1f82587f.js",
  "/dist/docs/assets/js/159.4cebd9d3.js",
  "/dist/docs/assets/js/16.0414f390.js",
  "/dist/docs/assets/js/160.47df8215.js",
  "/dist/docs/assets/js/161.fac79692.js",
  "/dist/docs/assets/js/162.9f2f870f.js",
  "/dist/docs/assets/js/163.4f1604f9.js",
  "/dist/docs/assets/js/164.7f8d8643.js",
  "/dist/docs/assets/js/165.fe2baa69.js",
  "/dist/docs/assets/js/166.c82b3c76.js",
  "/dist/docs/assets/js/167.3c3f2ff1.js",
  "/dist/docs/assets/js/168.8d2e8e83.js",
  "/dist/docs/assets/js/169.b10c84bd.js",
  "/dist/docs/assets/js/17.8dfcb176.js",
  "/dist/docs/assets/js/170.b9db8312.js",
  "/dist/docs/assets/js/171.2480fc36.js",
  "/dist/docs/assets/js/172.81c5206a.js",
  "/dist/docs/assets/js/173.477dcbae.js",
  "/dist/docs/assets/js/174.05398ca3.js",
  "/dist/docs/assets/js/175.84ab69d0.js",
  "/dist/docs/assets/js/176.f48183c3.js",
  "/dist/docs/assets/js/177.d0d35403.js",
  "/dist/docs/assets/js/178.55d433fd.js",
  "/dist/docs/assets/js/179.9442c138.js",
  "/dist/docs/assets/js/18.c331029e.js",
  "/dist/docs/assets/js/180.5c15d5d4.js",
  "/dist/docs/assets/js/181.911f367b.js",
  "/dist/docs/assets/js/182.72f663e8.js",
  "/dist/docs/assets/js/183.22b2258c.js",
  "/dist/docs/assets/js/184.15b21065.js",
  "/dist/docs/assets/js/185.894ea40b.js",
  "/dist/docs/assets/js/186.f6394459.js",
  "/dist/docs/assets/js/187.7bd9b3fe.js",
  "/dist/docs/assets/js/188.3baa9bcd.js",
  "/dist/docs/assets/js/189.18e63b11.js",
  "/dist/docs/assets/js/19.13bdd658.js",
  "/dist/docs/assets/js/190.b7ffb54a.js",
  "/dist/docs/assets/js/191.13061aba.js",
  "/dist/docs/assets/js/192.1bf9bd61.js",
  "/dist/docs/assets/js/193.8fa44455.js",
  "/dist/docs/assets/js/194.49c9a3c0.js",
  "/dist/docs/assets/js/195.eb1e8802.js",
  "/dist/docs/assets/js/196.9b925823.js",
  "/dist/docs/assets/js/197.adca6c8c.js",
  "/dist/docs/assets/js/198.2ae0961a.js",
  "/dist/docs/assets/js/199.cd9dca80.js",
  "/dist/docs/assets/js/2.3e2307f3.js",
  "/dist/docs/assets/js/20.5d11c294.js",
  "/dist/docs/assets/js/200.2eb9437f.js",
  "/dist/docs/assets/js/201.6dba10c3.js",
  "/dist/docs/assets/js/202.9c5057c6.js",
  "/dist/docs/assets/js/203.98a3c2b8.js",
  "/dist/docs/assets/js/204.50d5cf2e.js",
  "/dist/docs/assets/js/205.e56e820b.js",
  "/dist/docs/assets/js/206.6ce5c41e.js",
  "/dist/docs/assets/js/207.8aa83d91.js",
  "/dist/docs/assets/js/208.296ee160.js",
  "/dist/docs/assets/js/209.13279349.js",
  "/dist/docs/assets/js/21.7b54d7d8.js",
  "/dist/docs/assets/js/210.63e30420.js",
  "/dist/docs/assets/js/211.0b325f23.js",
  "/dist/docs/assets/js/212.be671e2e.js",
  "/dist/docs/assets/js/213.81d2e607.js",
  "/dist/docs/assets/js/214.ba403b5c.js",
  "/dist/docs/assets/js/215.2efcec5f.js",
  "/dist/docs/assets/js/216.e01d3100.js",
  "/dist/docs/assets/js/217.906c8d54.js",
  "/dist/docs/assets/js/218.94e33827.js",
  "/dist/docs/assets/js/219.21c5e01f.js",
  "/dist/docs/assets/js/22.c2daedd0.js",
  "/dist/docs/assets/js/220.3ba160e4.js",
  "/dist/docs/assets/js/221.5c17138c.js",
  "/dist/docs/assets/js/222.aea004ce.js",
  "/dist/docs/assets/js/223.cbb7b883.js",
  "/dist/docs/assets/js/224.b130b37f.js",
  "/dist/docs/assets/js/225.32f90319.js",
  "/dist/docs/assets/js/226.8c102c21.js",
  "/dist/docs/assets/js/227.b3d60339.js",
  "/dist/docs/assets/js/228.72f0ad18.js",
  "/dist/docs/assets/js/229.3daa3b7e.js",
  "/dist/docs/assets/js/23.2c668e20.js",
  "/dist/docs/assets/js/230.7e5a85b1.js",
  "/dist/docs/assets/js/231.b83d12f1.js",
  "/dist/docs/assets/js/232.e902f42d.js",
  "/dist/docs/assets/js/233.b4f254c0.js",
  "/dist/docs/assets/js/234.d975df48.js",
  "/dist/docs/assets/js/235.71a7be7d.js",
  "/dist/docs/assets/js/236.05d87a5e.js",
  "/dist/docs/assets/js/237.d518e28b.js",
  "/dist/docs/assets/js/238.eb60e397.js",
  "/dist/docs/assets/js/239.81fecfed.js",
  "/dist/docs/assets/js/24.af200d5b.js",
  "/dist/docs/assets/js/240.c0869bc2.js",
  "/dist/docs/assets/js/241.59dc896f.js",
  "/dist/docs/assets/js/242.6d423d39.js",
  "/dist/docs/assets/js/243.a355eaa8.js",
  "/dist/docs/assets/js/244.ad729cf8.js",
  "/dist/docs/assets/js/245.c3cd6bbe.js",
  "/dist/docs/assets/js/246.d0708528.js",
  "/dist/docs/assets/js/247.13d65d78.js",
  "/dist/docs/assets/js/248.1d222543.js",
  "/dist/docs/assets/js/249.2d7a9bf1.js",
  "/dist/docs/assets/js/25.4f97f63f.js",
  "/dist/docs/assets/js/250.09ef38e2.js",
  "/dist/docs/assets/js/251.0cb90e8a.js",
  "/dist/docs/assets/js/252.2ff0def4.js",
  "/dist/docs/assets/js/253.61c7c505.js",
  "/dist/docs/assets/js/254.20137eeb.js",
  "/dist/docs/assets/js/255.49c937e9.js",
  "/dist/docs/assets/js/256.8d709dae.js",
  "/dist/docs/assets/js/257.b3ebdce7.js",
  "/dist/docs/assets/js/258.792f66d1.js",
  "/dist/docs/assets/js/259.98c809e9.js",
  "/dist/docs/assets/js/26.d1bb645c.js",
  "/dist/docs/assets/js/260.54ff10d2.js",
  "/dist/docs/assets/js/261.928afea4.js",
  "/dist/docs/assets/js/27.2d5c4a6b.js",
  "/dist/docs/assets/js/28.72dee0f1.js",
  "/dist/docs/assets/js/29.8820be26.js",
  "/dist/docs/assets/js/3.947b8d98.js",
  "/dist/docs/assets/js/30.343676b8.js",
  "/dist/docs/assets/js/31.cff089f1.js",
  "/dist/docs/assets/js/32.56d8546e.js",
  "/dist/docs/assets/js/33.6b642a06.js",
  "/dist/docs/assets/js/34.360a9ea9.js",
  "/dist/docs/assets/js/35.205d7fac.js",
  "/dist/docs/assets/js/36.f2765bae.js",
  "/dist/docs/assets/js/37.6c33435e.js",
  "/dist/docs/assets/js/38.a778a6a2.js",
  "/dist/docs/assets/js/39.7dda160f.js",
  "/dist/docs/assets/js/4.ee88d25a.js",
  "/dist/docs/assets/js/40.bd778eac.js",
  "/dist/docs/assets/js/41.b79220f6.js",
  "/dist/docs/assets/js/42.c3157beb.js",
  "/dist/docs/assets/js/43.097368d1.js",
  "/dist/docs/assets/js/44.2515f16e.js",
  "/dist/docs/assets/js/45.d5b4b7c3.js",
  "/dist/docs/assets/js/46.bbab8d6e.js",
  "/dist/docs/assets/js/47.79aa575e.js",
  "/dist/docs/assets/js/48.45785af9.js",
  "/dist/docs/assets/js/49.0569a6eb.js",
  "/dist/docs/assets/js/5.00f814ac.js",
  "/dist/docs/assets/js/50.14bd3ba2.js",
  "/dist/docs/assets/js/51.e0968711.js",
  "/dist/docs/assets/js/52.fe65ddf8.js",
  "/dist/docs/assets/js/53.faa1ff3f.js",
  "/dist/docs/assets/js/54.fcfed2c5.js",
  "/dist/docs/assets/js/55.7db1d28a.js",
  "/dist/docs/assets/js/56.8b0e82b7.js",
  "/dist/docs/assets/js/57.9de2d983.js",
  "/dist/docs/assets/js/58.b0f8ad0c.js",
  "/dist/docs/assets/js/59.f1ff4935.js",
  "/dist/docs/assets/js/6.2bc86161.js",
  "/dist/docs/assets/js/60.ac08de9a.js",
  "/dist/docs/assets/js/61.ea4fad75.js",
  "/dist/docs/assets/js/62.5c85853b.js",
  "/dist/docs/assets/js/63.5ac99656.js",
  "/dist/docs/assets/js/64.c6838e95.js",
  "/dist/docs/assets/js/65.4c1b089e.js",
  "/dist/docs/assets/js/66.379a6b45.js",
  "/dist/docs/assets/js/67.15703e17.js",
  "/dist/docs/assets/js/68.ffdefd7d.js",
  "/dist/docs/assets/js/69.bdeb7b9b.js",
  "/dist/docs/assets/js/7.74f2ce90.js",
  "/dist/docs/assets/js/70.3dadb5ed.js",
  "/dist/docs/assets/js/71.2c97fe38.js",
  "/dist/docs/assets/js/72.dc778e17.js",
  "/dist/docs/assets/js/73.d88fcb57.js",
  "/dist/docs/assets/js/74.bba2165e.js",
  "/dist/docs/assets/js/75.15562a81.js",
  "/dist/docs/assets/js/76.21f5a94e.js",
  "/dist/docs/assets/js/77.0725268e.js",
  "/dist/docs/assets/js/78.d6f610d1.js",
  "/dist/docs/assets/js/79.60d67faa.js",
  "/dist/docs/assets/js/8.8928eb8b.js",
  "/dist/docs/assets/js/80.99d71ee0.js",
  "/dist/docs/assets/js/81.f1500469.js",
  "/dist/docs/assets/js/82.69f363a6.js",
  "/dist/docs/assets/js/83.f1fbcb2c.js",
  "/dist/docs/assets/js/84.b76e3156.js",
  "/dist/docs/assets/js/85.efc4bd54.js",
  "/dist/docs/assets/js/86.85011b24.js",
  "/dist/docs/assets/js/87.6a88d571.js",
  "/dist/docs/assets/js/88.0f45cfe0.js",
  "/dist/docs/assets/js/89.e67ddb59.js",
  "/dist/docs/assets/js/9.63ebb16b.js",
  "/dist/docs/assets/js/90.96ebfa9b.js",
  "/dist/docs/assets/js/91.cdde4d3f.js",
  "/dist/docs/assets/js/92.dc3f06d2.js",
  "/dist/docs/assets/js/93.aaa04d52.js",
  "/dist/docs/assets/js/94.2af5650c.js",
  "/dist/docs/assets/js/95.1d44ec16.js",
  "/dist/docs/assets/js/96.9545127d.js",
  "/dist/docs/assets/js/97.8b18f487.js",
  "/dist/docs/assets/js/98.cb259cd0.js",
  "/dist/docs/assets/js/99.6251650a.js",
  "/dist/docs/assets/js/app.7e0dc8c8.js",
  "/dist/docs/axes/_common.html",
  "/dist/docs/axes/_common_ticks.html",
  "/dist/docs/axes/cartesian/_common.html",
  "/dist/docs/axes/cartesian/_common_ticks.html",
  "/dist/docs/axes/cartesian/category.html",
  "/dist/docs/axes/cartesian/index.html",
  "/dist/docs/axes/cartesian/linear.html",
  "/dist/docs/axes/cartesian/logarithmic.html",
  "/dist/docs/axes/cartesian/time.html",
  "/dist/docs/axes/cartesian/timeseries.html",
  "/dist/docs/axes/index.html",
  "/dist/docs/axes/labelling.html",
  "/dist/docs/axes/radial/index.html",
  "/dist/docs/axes/radial/linear.html",
  "/dist/docs/axes/styling.html",
  "/dist/docs/charts/area.html",
  "/dist/docs/charts/bar.html",
  "/dist/docs/charts/bubble.html",
  "/dist/docs/charts/doughnut.html",
  "/dist/docs/charts/index.html",
  "/dist/docs/charts/line.html",
  "/dist/docs/charts/mixed.html",
  "/dist/docs/charts/polar.html",
  "/dist/docs/charts/radar.html",
  "/dist/docs/charts/scatter.html",
  "/dist/docs/configuration/animations.html",
  "/dist/docs/configuration/canvas-background.html",
  "/dist/docs/configuration/decimation.html",
  "/dist/docs/configuration/device-pixel-ratio.html",
  "/dist/docs/configuration/elements.html",
  "/dist/docs/configuration/index.html",
  "/dist/docs/configuration/interactions.html",
  "/dist/docs/configuration/layout.html",
  "/dist/docs/configuration/legend.html",
  "/dist/docs/configuration/locale.html",
  "/dist/docs/configuration/responsive.html",
  "/dist/docs/configuration/subtitle.html",
  "/dist/docs/configuration/title.html",
  "/dist/docs/configuration/tooltip.html",
  "/dist/docs/developers/api.html",
  "/dist/docs/developers/axes.html",
  "/dist/docs/developers/charts.html",
  "/dist/docs/developers/contributing.html",
  "/dist/docs/developers/index.html",
  "/dist/docs/developers/plugins.html",
  "/dist/docs/developers/publishing.html",
  "/dist/docs/developers/updates.html",
  "/dist/docs/favicon.ico",
  "/dist/docs/general/accessibility.html",
  "/dist/docs/general/colors.html",
  "/dist/docs/general/data-structures.html",
  "/dist/docs/general/fonts.html",
  "/dist/docs/general/index.html",
  "/dist/docs/general/options.html",
  "/dist/docs/general/padding.html",
  "/dist/docs/general/performance.html",
  "/dist/docs/getting-started/index.html",
  "/dist/docs/getting-started/installation.html",
  "/dist/docs/getting-started/integration.html",
  "/dist/docs/getting-started/usage.html",
  "/dist/docs/getting-started/v3-migration.html",
  "/dist/docs/index.html",
  "/dist/docs/logo.png",
  "/dist/docs/logo.svg",
  "/dist/docs/samples/advanced/data-decimation.html",
  "/dist/docs/samples/advanced/derived-axis-type.html",
  "/dist/docs/samples/advanced/derived-chart-type.html",
  "/dist/docs/samples/advanced/linear-gradient.html",
  "/dist/docs/samples/advanced/programmatic-events.html",
  "/dist/docs/samples/advanced/progress-bar.html",
  "/dist/docs/samples/advanced/radial-gradient.html",
  "/dist/docs/samples/animations/delay.html",
  "/dist/docs/samples/animations/drop.html",
  "/dist/docs/samples/animations/loop.html",
  "/dist/docs/samples/animations/progressive-line-easing.html",
  "/dist/docs/samples/animations/progressive-line.html",
  "/dist/docs/samples/area/line-boundaries.html",
  "/dist/docs/samples/area/line-datasets.html",
  "/dist/docs/samples/area/line-drawtime.html",
  "/dist/docs/samples/area/line-stacked.html",
  "/dist/docs/samples/area/radar.html",
  "/dist/docs/samples/bar/border-radius.html",
  "/dist/docs/samples/bar/floating.html",
  "/dist/docs/samples/bar/horizontal.html",
  "/dist/docs/samples/bar/stacked-groups.html",
  "/dist/docs/samples/bar/stacked.html",
  "/dist/docs/samples/bar/vertical.html",
  "/dist/docs/samples/index.html",
  "/dist/docs/samples/information.html",
  "/dist/docs/samples/legend/events.html",
  "/dist/docs/samples/legend/html.html",
  "/dist/docs/samples/legend/point-style.html",
  "/dist/docs/samples/legend/position.html",
  "/dist/docs/samples/legend/title.html",
  "/dist/docs/samples/line/interpolation.html",
  "/dist/docs/samples/line/line.html",
  "/dist/docs/samples/line/multi-axis.html",
  "/dist/docs/samples/line/point-styling.html",
  "/dist/docs/samples/line/segments.html",
  "/dist/docs/samples/line/stepped.html",
  "/dist/docs/samples/line/styling.html",
  "/dist/docs/samples/other-charts/bubble.html",
  "/dist/docs/samples/other-charts/combo-bar-line.html",
  "/dist/docs/samples/other-charts/doughnut.html",
  "/dist/docs/samples/other-charts/multi-series-pie.html",
  "/dist/docs/samples/other-charts/pie.html",
  "/dist/docs/samples/other-charts/polar-area-center-labels.html",
  "/dist/docs/samples/other-charts/polar-area.html",
  "/dist/docs/samples/other-charts/radar-skip-points.html",
  "/dist/docs/samples/other-charts/radar.html",
  "/dist/docs/samples/other-charts/scatter-multi-axis.html",
  "/dist/docs/samples/other-charts/scatter.html",
  "/dist/docs/samples/other-charts/stacked-bar-line.html",
  "/dist/docs/samples/plugins/chart-area-border.html",
  "/dist/docs/samples/plugins/doughnut-empty-state.html",
  "/dist/docs/samples/plugins/quadrants.html",
  "/dist/docs/samples/scale-options/center.html",
  "/dist/docs/samples/scale-options/grid.html",
  "/dist/docs/samples/scale-options/ticks.html",
  "/dist/docs/samples/scale-options/titles.html",
  "/dist/docs/samples/scales/linear-min-max-suggested.html",
  "/dist/docs/samples/scales/linear-min-max.html",
  "/dist/docs/samples/scales/linear-step-size.html",
  "/dist/docs/samples/scales/log.html",
  "/dist/docs/samples/scales/stacked.html",
  "/dist/docs/samples/scales/time-combo.html",
  "/dist/docs/samples/scales/time-line.html",
  "/dist/docs/samples/scales/time-max-span.html",
  "/dist/docs/samples/scriptable/bar.html",
  "/dist/docs/samples/scriptable/bubble.html",
  "/dist/docs/samples/scriptable/line.html",
  "/dist/docs/samples/scriptable/pie.html",
  "/dist/docs/samples/scriptable/polar.html",
  "/dist/docs/samples/scriptable/radar.html",
  "/dist/docs/samples/subtitle/basic.html",
  "/dist/docs/samples/title/alignment.html",
  "/dist/docs/samples/tooltip/content.html",
  "/dist/docs/samples/tooltip/html.html",
  "/dist/docs/samples/tooltip/interactions.html",
  "/dist/docs/samples/tooltip/point-style.html",
  "/dist/docs/samples/tooltip/position.html",
  "/dist/docs/samples/utils.html",
  "/dist/helpers.esm.js",
  "/dist/helpers.mjs",
  "/google3fbea5d43709d99d.html",
  "/helpers/helpers.js",
  "/helpers/helpers.mjs",
  "/helpers/helpers.mts",
  "/index.html",
  "/manifest.webmanifest",
  "/robots.txt",
  "/sitemap.xml",
  "/sw.js",
  "/swc.js",
  "/types/.eslintrc.yml",
  "/types/adapters.d.ts",
  "/types/animation.d.ts",
  "/types/basic.d.ts",
  "/types/color.d.ts",
  "/types/element.d.ts",
  "/types/geometric.d.ts",
  "/types/helpers/helpers.canvas.d.ts",
  "/types/helpers/helpers.collection.d.ts",
  "/types/helpers/helpers.color.d.ts",
  "/types/helpers/helpers.core.d.ts",
  "/types/helpers/helpers.curve.d.ts",
  "/types/helpers/helpers.dom.d.ts",
  "/types/helpers/helpers.easing.d.ts",
  "/types/helpers/helpers.extras.d.ts",
  "/types/helpers/helpers.interpolation.d.ts",
  "/types/helpers/helpers.intl.d.ts",
  "/types/helpers/helpers.math.d.ts",
  "/types/helpers/helpers.options.d.ts",
  "/types/helpers/helpers.rtl.d.ts",
  "/types/helpers/helpers.segment.d.ts",
  "/types/helpers/index.d.ts",
  "/types/index.esm.d.ts",
  "/types/layout.d.ts",
  "/types/tests/.eslintrc.yml",
  "/types/tests/animation.ts",
  "/types/tests/autogen.js",
  "/types/tests/chart_types.ts",
  "/types/tests/controllers/bubble_chart_options.ts",
  "/types/tests/controllers/doughnut_meta_total.ts",
  "/types/tests/controllers/doughnut_offset.ts",
  "/types/tests/controllers/doughnut_outer_radius.ts",
  "/types/tests/controllers/line_scriptable_parsed_data.ts",
  "/types/tests/controllers/line_segments.ts",
  "/types/tests/controllers/line_span_gaps.ts",
  "/types/tests/controllers/line_styling_array.ts",
  "/types/tests/controllers/radar_dataset_indexable_options.ts",
  "/types/tests/data_types.ts",
  "/types/tests/dataset_null_data.ts",
  "/types/tests/defaults.ts",
  "/types/tests/elements/scriptable_element_options.ts",
  "/types/tests/extensions/plugin.ts",
  "/types/tests/extensions/scale.ts",
  "/types/tests/helpers/options.ts",
  "/types/tests/interaction.ts",
  "/types/tests/layout/position.ts",
  "/types/tests/options.ts",
  "/types/tests/overrides.ts",
  "/types/tests/parsed.data.type.ts",
  "/types/tests/plugins/defaults.ts",
  "/types/tests/plugins/plugin.decimation/decimation_algorithm.ts",
  "/types/tests/plugins/plugin.filler/fill_target_true.ts",
  "/types/tests/plugins/plugin.tooltip/chart.tooltip.ts",
  "/types/tests/plugins/plugin.tooltip/tooltip_dataset_type.ts",
  "/types/tests/plugins/plugin.tooltip/tooltip_parsed_data.ts",
  "/types/tests/plugins/plugin.tooltip/tooltip_parsed_data_chart_defaults.ts",
  "/types/tests/plugins/plugin.tooltip/tooltip_scriptable_background_color.ts",
  "/types/tests/register.ts",
  "/types/tests/scales/chart_options.ts",
  "/types/tests/scales/options.ts",
  "/types/tests/scales/time_string_max.ts",
  "/types/tests/scriptable.ts",
  "/types/tests/scriptable_core_chart_options.ts",
  "/types/tests/test_instance_assignment.ts",
  "/types/tests/tsconfig.json",
  "/types/utils.d.ts",
  "/ven.png",
  "/venturi_data.json"
];

// Install the service worker and cache all necessary files
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Serve cached content when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          response => {
            // Check if we received a valid response
            if(!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // Clone the response
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(() => {
          // If fetch fails and the request is for HTML, return the cached index.html
          if (event.request.headers.get('accept').includes('text/html')) {
            return caches.match('/index.html');
          }
        });
      })
  );
});

// Clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for data updates when connection is restored
self.addEventListener('sync', event => {
  if (event.tag === 'sync-data') {
    event.waitUntil(
      fetchLatestData()
        .then(() => {
          console.log('Data synced successfully');
          return Promise.resolve();
        })
        .catch(error => {
          console.log('Sync failed', error);
          return Promise.reject();
        })
    );
  }
});

function fetchLatestData() {
  // This would be your data fetching logic
  return fetch('/venturi_data.json')
    .then(response => response.json())
    .then(data => {
      // Store the data in IndexedDB or cache
      return Promise.resolve();
    });
}
