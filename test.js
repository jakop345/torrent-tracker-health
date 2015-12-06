var health = require('./');

var tests = [
    'magnet:?xt=urn:btih:5W5KGVINEZWUHQKTWWTFFGVNVQPDNKGF&dn=24.S09E10.720p.HDTV.X264-DIMENSION&tr=udp://open.demonii.com:1337',
    'magnet:?xt=urn:btih:484921b7b2de050e35920b8932297bf4fd4d4f00&dn=Chef+(2014)&tr=udp://open.demonii.com:1337',
    'magnet:?xt=urn:btih:d2310f718eb02f98665266786f7d00b42a20f055&dn=Gone+Girl+(2014)+1080p&tr=http://exodus.desync.com:6969/announce&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.1337x.org:80/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://tracker.yify-torrents.com/announce',
    'magnet:?xt=urn:btih:d2310f718eb02f98665266786f7d00b42a20f055&dn=Gone+Girl+(2014)+1080p&tr=http://exodus.desync.com:6969/announce&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.1337x.org:80/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://tracker.yify-torrents.com/announce',
    'magnet:?xt=urn:btih:d2310f718eb02f98665266786f7d00b42a20f055&dn=Gone+Girl+(2014)+1080p&tr=http://exodus.desync.com:6969/announce&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.1337x.org:80/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://tracker.yify-torrents.com/announce',
    'magnet:?xt=urn:btih:d2310f718eb02f98665266786f7d00b42a20f055&dn=Gone+Girl+(2014)+1080p&tr=http://exodus.desync.com:6969/announce&tr=udp://tracker.openbittorrent.com:80/announce&tr=udp://tracker.1337x.org:80/announce&tr=udp://exodus.desync.com:6969/announce&tr=udp://tracker.yify-torrents.com/announce',
    'magnet:?xt=urn:btih:484921b7b2de050e35920b8932297bf4fd4d4f00&dn=Chef+(2014)&tr=udp://open.demonii.com:1337',
];

tests.forEach(function (uri) {
    health(uri, {
        forced: ['udp://open.demonii.com:1337'],
        blacklist: ['openbittorrent.com', '1337x.org', 'yify-torrents.com']
    }).then(function (data) {
        console.log('[Done]', uri);
        console.log(data);
    }, function (err) {
        console.error(err);
    });
});