import M$plugin$Featureinfo from '/home/epardo/proyectos/featureinfo/src/facade/js/featureinfo';
import M$control$FeatureinfoControl from '/home/epardo/proyectos/featureinfo/src/facade/js/featureinfocontrol';
import M$impl$control$FeatureinfoControl from '/home/epardo/proyectos/featureinfo/src/impl/ol/js/featureinfocontrol';

if (!window.M.plugin) window.M.plugin = {};
if (!window.M.control) window.M.control = {};
if (!window.M.impl) window.M.impl = {};
if (!window.M.impl.control) window.M.impl.control = {};
window.M.plugin.Featureinfo = M$plugin$Featureinfo;
window.M.control.FeatureinfoControl = M$control$FeatureinfoControl;
window.M.impl.control.FeatureinfoControl = M$impl$control$FeatureinfoControl;
