import Featureinfo from 'facade/featureinfo';

const map = M.map({
  controls:['panzoombar','getfeatureinfo','scale','mouse','scaleline','overviewmap','rotate','location'],
  // controls:['panzoombar'],
  container: 'mapjs',
});

const mp = new Featureinfo({options: {position:'BR'}});

//const mp = new Featureinfo();

map.addPlugin(new M.plugin.Measurebar());

map.addPlugin(mp);
