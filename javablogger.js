'use strict';
! function (_0x74e9x2) {
    _0x74e9x2.fn.pbtLazy = function (_0x74e9x3) {
        return _0x74e9x3 = _0x74e9x2.extend({
            onScroll: !0
        }, _0x74e9x3), this.each(function () {
            let _0x74e9x4 = _0x74e9x2(this),
                _0x74e9x5 = _0x74e9x2(window),
                _0x74e9x6 = _0x74e9x4.width() >= 1 ? _0x74e9x4.width() : 1,
                _0x74e9x7 = _0x74e9x4.height() >= 1 ? _0x74e9x4.height() : 1,
                _0x74e9x8 = 'w' + Math.round(_0x74e9x6 + _0x74e9x6 / 10) + '-h' + Math.round(_0x74e9x7 + _0x74e9x7 / 10) + '-p-k-no-nu',
                _0x74e9x9 = _0x74e9x4.data('src'),
                _0x74e9xa = _0x74e9x9.toLowerCase().match('.webp') ? '' : '-rw';
            _0x74e9x9.match('resources.blogblog.com') && (_0x74e9x9 = 'undefined' != typeof noThumbnail ? noThumbnail : pbt.noThumb), (_0x74e9x9.match('/img/a') || _0x74e9x9.match('/blogger_img_proxy')) && _0x74e9x9.match('=') && (_0x74e9x9 = _0x74e9x9.split('=')[0] + '=w72-h72-p-k-no-nu'), (_0x74e9x9.match('/img/a') || _0x74e9x9.match('/blogger_img_proxy')) && !_0x74e9x9.match('=') && (_0x74e9x9 += '=w72-h72-p-k-no-nu'), _0x74e9x9.match('/blogger_img_proxy') && _0x74e9x9.match('testonly') && (_0x74e9x9 = _0x74e9x9.replace('-testonly.', '.'));
            let _0x74e9xb;

            function _0x74e9xc() {
                let _0x74e9x2 = new Image;
                _0x74e9x2.onload = function () {
                    _0x74e9x4.attr('style', "background-image:url('" + this.src + "')").addClass('ynvXdm')
                }, _0x74e9x2.src = _0x74e9xb
            }
            _0x74e9xb = _0x74e9x9.match('/s72-c') ? _0x74e9x9.replace('/s72-c', '/' + _0x74e9x8 + _0x74e9xa) : _0x74e9x9.match('/w72-h') ? _0x74e9x9.replace('/w72-h72-p-k-no-nu', '/' + _0x74e9x8 + _0x74e9xa) : _0x74e9x9.match('=w72-h') ? _0x74e9x9.replace('=w72-h72-p-k-no-nu', '=' + _0x74e9x8 + _0x74e9xa) : _0x74e9x9, !0 == _0x74e9x3.onScroll ? _0x74e9x5.on('load resize scroll', function _0x74e9x2() {
                _0x74e9x5.scrollTop() + _0x74e9x5.height() >= _0x74e9x4.offset().top && (_0x74e9x5.off('load resize scroll', _0x74e9x2), _0x74e9xc())
            }).trigger('scroll') : _0x74e9x5.on('load', function _0x74e9x2() {
                _0x74e9x5.off('load', _0x74e9x2), _0x74e9xc()
            }).trigger('load')
        })
    }
}(jQuery);
const $w = $(window),
    $d = $(document),
    $h = $('html'),
    $b = $('body');

function getAttr(_0x74e9x2, _0x74e9x3) {
    let _0x74e9x4 = _0x74e9x2.split('$'),
        _0x74e9x5 = /([^{\}]+(?=}))/g,
        _0x74e9x6 = _0x74e9x4.length;
    for (let _0x74e9x7 = 0; _0x74e9x7 < _0x74e9x6; _0x74e9x7++) {
        let _0x74e9x8 = _0x74e9x4[_0x74e9x7].split('=');
        if (_0x74e9x8[0].trim() == _0x74e9x3) {
            let _0x74e9x9 = _0x74e9x8[1];
            if (_0x74e9x9 && null != _0x74e9x9.match(_0x74e9x5)) {
                return String(_0x74e9x9.match(_0x74e9x5)).trim()
            };
            break
        }
    };
    return !1
}

function darkModeLogo(_0x74e9x2) {
    $('[data-dark-src]').each(function () {
        let _0x74e9x3 = $(this),
            _0x74e9x4 = _0x74e9x3.data('dark-src'),
            _0x74e9x5 = _0x74e9x3.data('src');
        'true' == _0x74e9x2 ? _0x74e9x3.attr('src', _0x74e9x4) : _0x74e9x3.attr('src', _0x74e9x5)
    })
}

function openSearch() {
    localStorage.search_term = '', $('.overlay-bg').addClass('ms17'), $b.addClass('search-on'), setTimeout(function () {
        $('.nAJHul input').focus()
    }, 170)
}

function cleanSearch() {
    setTimeout(function () {
        $('.nAJHul input').blur().val(''), $('.search-results').html('').removeClass('scroll').parent().removeClass('visible'), $('.overlay-bg').removeClass('ms17')
    }, 170)
}

function closeSearch() {
    $('.search-on .overlay-bg').on('click', function () {
        $b.removeClass('search-on'), cleanSearch()
    }), $w.on('keydown', function (_0x74e9x2) {
        27 == _0x74e9x2.keyCode && ($b.removeClass('search-on'), cleanSearch())
    })
}

function setDataKey() {
    $('.post-body a.gd-key').each(function () {
        let _0x74e9x2 = $(this),
            _0x74e9x3 = _0x74e9x2.attr('data-key');
        _0x74e9x2.on('click', function () {
            localStorage.gd_key = _0x74e9x3
        })
    })
}

function pAd(_0x74e9x2, _0x74e9x3) {
    $(_0x74e9x2).find('noscript').each(function () {
        let _0x74e9x2 = $(this),
            _0x74e9x4 = _0x74e9x2.text();
        $(_0x74e9x3).html(`${''}${'<div class="widget">'}${''}${_0x74e9x4}${''}${'</div>'}${''}`)
    })
}

function closeShare() {
    $b.removeClass('share-on'), setTimeout(function () {
        $('.overlay-bg').removeClass('ms17')
    }, 170)
}

function openShare() {
    $('.overlay-bg').addClass('ms17'), $b.addClass('share-on'), $('.hide-modal, .share-on .overlay-bg').on('click', function () {
        closeShare()
    }), $w.on('keydown', function (_0x74e9x2) {
        27 == _0x74e9x2.keyCode && closeShare()
    })
}

function navShortcuts(_0x74e9x2) {
    $(_0x74e9x2).each(function () {
        let _0x74e9x2 = $(this).attr('href');
        _0x74e9x2 && window.open(_0x74e9x2, '_self')
    })
}

function msgError(_0x74e9x2) {
    return `${''}${'<span class="error-msg">'}${''}${('search'!=_0x74e9x2?'<b>Error:</b>&nbsp;':'')+pbt .noResults }${''}${'</span>'}${''}`
}

function beforeLoader() {
    return '<div class="loader"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20"></circle></svg></div>'
}

function getFeedUrl(_0x74e9x2, _0x74e9x3) {
    let _0x74e9x4;
    return _0x74e9x4 = 'recent' === _0x74e9x3 ? `${''}${'/search/?by-date=true&max-results='}${''}${_0x74e9x2}${''}${'&amp=1'}${''}` : `${''}${'/search/label/'}${''}${_0x74e9x3}${''}${'?by-date=true&max-results='}${''}${_0x74e9x2}${''}${'&amp=1'}${''}`
}

function getPostID(_0x74e9x2) {
    return _0x74e9x2.id
}

function getPostLink(_0x74e9x2) {
    return _0x74e9x2.link
}

function getPostTitle(_0x74e9x2) {
    return _0x74e9x2.title
}

function getPostAuthor(_0x74e9x2) {
    '' != pbt.postAuthorLabel && pbt.postAuthorLabel;
    let _0x74e9x3 = pbt.postAuthor ? `${''}${'<span class="entry-author"><span class="author-name">'}${''}${_0x74e9x2 .author }${''}${'</span></span>'}${''}` : '';
    return _0x74e9x3
}

function getPostDate(_0x74e9x2) {
    let _0x74e9x3 = _0x74e9x2.published.date,
        _0x74e9x4 = _0x74e9x2.published.datetime,
        _0x74e9x5 = pbt.postAuthor && '' != pbt.postDateLabel ? `${''}${'<span class="sp">'}${''}${pbt .postDateLabel }${''}${'</span>'}${''}` : '',
        _0x74e9x6 = !0 == pbt.postDate ? `${''}${'<span class="entry-time">'}${''}${_0x74e9x5}${''}${'<time class="published" datetime="'}${''}${_0x74e9x4}${''}${'">'}${''}${_0x74e9x3}${''}${'</time></span>'}${''}` : '',
        _0x74e9x7 = !0 == pbt.postDate ? `${''}${'<span class="entry-time"><time class="published" datetime="'}${''}${_0x74e9x4}${''}${'">'}${''}${_0x74e9x3}${''}${'</time></span>'}${''}` : '';
    return [_0x74e9x6, _0x74e9x7]
}

function getPostMeta(_0x74e9x2, _0x74e9x3) {
    let _0x74e9x4 = !0 == pbt.postAuthor || !0 == pbt.postDate ? `${''}${'<div class="entry-meta">'}${''}${_0x74e9x2+_0x74e9x3[0]}${''}${'</div>'}${''}` : '',
        _0x74e9x5 = !0 == pbt.postDate ? `${''}${'<div class="entry-meta">'}${''}${_0x74e9x3[1]}${''}${'</div>'}${''}` : '';
    return [_0x74e9x4, _0x74e9x5]
}

function getPostImage(_0x74e9x2) {
    return _0x74e9x2.thumbnail.src
}

function getPostImageType(_0x74e9x2, _0x74e9x3) {
    let _0x74e9x4 = function (_0x74e9x4) {
            let _0x74e9x5 = `${''}${' yt-img'}${''}${_0x74e9x4?':x'+_0x74e9x4:''}${''}${''}${''}`;
            return 'youtube' == _0x74e9x2.thumbnail.source ? _0x74e9x5 : 'video' == _0x74e9x3 ? _0x74e9x5 : ''
        },
        _0x74e9x5 = ['', _0x74e9x4(), _0x74e9x4(2), _0x74e9x4(3), _0x74e9x4(4)];
    return _0x74e9x5
}

function getPostTag(_0x74e9x2) {
    let _0x74e9x3 = _0x74e9x2.category && pbt.postCategory ? `${''}${'<span class="entry-tag">'}${''}${_0x74e9x2 .category }${''}${'</span>'}${''}` : '';
    return _0x74e9x3
}

function getPostSummary(_0x74e9x2, _0x74e9x3) {
    let _0x74e9x4 = _0x74e9x2.summary && pbt.postSummary ? `${''}${'<span class="entry-excerpt excerpt">'}${''}${_0x74e9x2 .summary  .substr (0,_0x74e9x3)}${''}${'…</span>'}${''}` : '';
    return _0x74e9x4
}

function getPostContent(_0x74e9x2) {
    let _0x74e9x3 = _0x74e9x2.type,
        _0x74e9x4 = _0x74e9x2.post,
        _0x74e9x5 = _0x74e9x2.index,
        _0x74e9x6 = _0x74e9x2.num,
        _0x74e9x7 = _0x74e9x2.headline,
        _0x74e9x8 = _0x74e9x2.target,
        _0x74e9x9 = '',
        _0x74e9xa = getPostDate(_0x74e9x4),
        _0x74e9xb = getPostAuthor(_0x74e9x4),
        _0x74e9xc = getPostTag(_0x74e9x4),
        _0x74e9x29 = getPostTitle(_0x74e9x4),
        _0x74e9x2a = getPostLink(_0x74e9x4),
        _0x74e9x2b = getPostImage(_0x74e9x4),
        _0x74e9x2c = getPostImageType(_0x74e9x4, _0x74e9x3),
        _0x74e9x2d = getPostMeta(_0x74e9xb, _0x74e9xa);
    switch (_0x74e9x3) {
    case 'mega':
        ;
    case 'megatabs':
        ;
    case 'grid2':
        _0x74e9x9 = `${''}${'<div class="post item-'}${''}${_0x74e9x5}${''}${'"><a class="entry-thumbnail'}${''}${_0x74e9x2c[2]}${''}${'" href="'}${''}${_0x74e9x2a}${''}${'" title="'}${''}${_0x74e9x29}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x74e9x2b}${''}${'"></span></a><div class="entry-header"><h2 class="entry-title"><a href="'}${''}${_0x74e9x2a}${''}${'">'}${''}${_0x74e9x29}${''}${'</a></h2>'}${''}${_0x74e9x2d[1]}${''}${'</div></div>'}${''}`;
        break;
    case 'search':
        _0x74e9x9 = _0x74e9x5 != _0x74e9x6 ? `${''}${'<div class="post item-'}${''}${_0x74e9x5}${''}${'"><a class="entry-thumbnail'}${''}${_0x74e9x2c[3]}${''}${'" href="'}${''}${_0x74e9x2a}${''}${'" title="'}${''}${_0x74e9x29}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x74e9x2b}${''}${'"></span></a><div class="entry-header"><h2 class="entry-title"><a href="'}${''}${_0x74e9x2a}${''}${'">'}${''}${_0x74e9x29}${''}${'</a></h2>'}${''}${_0x74e9x2d[1]}${''}${'</div></div>'}${''}` : '';
        break;
    case 'ticker':
        _0x74e9x9 = `${''}${'<div class="post item-'}${''}${_0x74e9x5+(0==_0x74e9x5?' active':'')}${''}${'"><h2 class="entry-title"><a href="'}${''}${_0x74e9x2a}${''}${'">'}${''}${_0x74e9x29}${''}${'</a></h2></div>'}${''}`;
        break;
    case 'featured':
        _0x74e9x9 = 0 === _0x74e9x5 ? `${''}${'<div class="post cs item-'}${''}${_0x74e9x5}${''}${'"><a class="entry-inner" href="'}${''}${_0x74e9x2a}${''}${'" title="'}${''}${_0x74e9x29}${''}${'"><span class="entry-thumbnail'}${''}${_0x74e9x2c[1]}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x74e9x2b}${''}${'"></span></span><div class="entry-header">'}${''}${_0x74e9xc}${''}${'<h2 class="entry-title">'}${''}${_0x74e9x29}${''}${'</h2>'}${''}${_0x74e9x2d[0]}${''}${'</div></a></div>'}${''}` : (1 == _0x74e9x5 ? `${''}${'<div class="'}${''}${_0x74e9x3}${''}${'-grid">'}${''}` : '') + `${''}${'<div class="post item-'}${''}${_0x74e9x5}${''}${'"><a class="entry-thumbnail'}${''}${_0x74e9x2c[1]}${''}${'" href="'}${''}${_0x74e9x2a}${''}${'" title="'}${''}${_0x74e9x29}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x74e9x2b}${''}${'"></span></a><div class="entry-header"><h2 class="entry-title"><a href="'}${''}${_0x74e9x2a}${''}${'">'}${''}${_0x74e9x29}${''}${'</a></h2>'}${''}${_0x74e9x2d[1]}${''}${'</div></div>'}${''}`;
        break;
    case 'block1':
        ;
    case 'col':
        _0x74e9x9 = 0 === _0x74e9x5 ? `${''}${'<div class="post cs item-'}${''}${_0x74e9x5}${''}${'"><a class="entry-inner" href="'}${''}${_0x74e9x2a}${''}${'" title="'}${''}${_0x74e9x29}${''}${'"><span class="entry-thumbnail'}${''}${_0x74e9x2c[1]}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x74e9x2b}${''}${'"></span></span><div class="entry-header">'}${''}${_0x74e9xc}${''}${'<h2 class="entry-title">'}${''}${_0x74e9x29}${''}${'</h2>'}${''}${_0x74e9x2d[0]}${''}${'</div></a></div>'}${''}` : (1 == _0x74e9x5 ? `${''}${'<div class="'}${''}${_0x74e9x3}${''}${'-list">'}${''}` : '') + `${''}${'<div class="post item-'}${''}${_0x74e9x5}${''}${'"><a class="entry-thumbnail'}${''}${_0x74e9x2c[4]}${''}${'" href="'}${''}${_0x74e9x2a}${''}${'" title="'}${''}${_0x74e9x29}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x74e9x2b}${''}${'"></span></a><div class="entry-header"><h2 class="entry-title"><a href="'}${''}${_0x74e9x2a}${''}${'">'}${''}${_0x74e9x29}${''}${'</a></h2>'}${''}${_0x74e9x2d[1]}${''}${'</div></div>'}${''}`;
        break;
    case 'block2':
        _0x74e9x9 = 0 === _0x74e9x5 ? `${''}${'<div class="post cs item-'}${''}${_0x74e9x5}${''}${'"><a class="entry-inner" href="'}${''}${_0x74e9x2a}${''}${'" title="'}${''}${_0x74e9x29}${''}${'"><span class="entry-thumbnail'}${''}${_0x74e9x2c[1]}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x74e9x2b}${''}${'"></span></span><div class="entry-header">'}${''}${_0x74e9xc}${''}${'<h2 class="entry-title">'}${''}${_0x74e9x29}${''}${'</h2>'}${''}${_0x74e9x2d[0]}${''}${'</div></a></div>'}${''}` : (1 == _0x74e9x5 ? `${''}${'<div class="'}${''}${_0x74e9x3}${''}${'-grid">'}${''}` : '') + `${''}${'<div class="post item-'}${''}${_0x74e9x5}${''}${'"><a class="entry-thumbnail'}${''}${_0x74e9x2c[2]}${''}${'" href="'}${''}${_0x74e9x2a}${''}${'" title="'}${''}${_0x74e9x29}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x74e9x2b}${''}${'"></span></a><div class="entry-header"><h2 class="entry-title"><a href="'}${''}${_0x74e9x2a}${''}${'">'}${''}${_0x74e9x29}${''}${'</a></h2>'}${''}${_0x74e9x2d[1]}${''}${'</div></div>'}${''}`;
        break;
    case 'list':
        _0x74e9x9 = `${''}${'<div class="post item-'}${''}${_0x74e9x5}${''}${'"><a class="entry-thumbnail'}${''}${_0x74e9x2c[1]}${''}${'" href="'}${''}${_0x74e9x2a}${''}${'" title="'}${''}${_0x74e9x29}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x74e9x2b}${''}${'"></span>'}${''}${_0x74e9xc}${''}${'</a><div class="entry-header"><h2 class="entry-title"><a href="'}${''}${_0x74e9x2a}${''}${'">'}${''}${_0x74e9x29}${''}${'</a></h2>'}${''}${getPostSummary(_0x74e9x4,64)+_0x74e9x2d[0]}${''}${'</div></div>'}${''}`;
        break;
    case 'grid':
        _0x74e9x9 = `${''}${'<div class="post item-'}${''}${_0x74e9x5}${''}${'"><a class="entry-thumbnail'}${''}${_0x74e9x2c[1]}${''}${'" href="'}${''}${_0x74e9x2a}${''}${'" title="'}${''}${_0x74e9x29}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x74e9x2b}${''}${'"></span>'}${''}${_0x74e9xc}${''}${'</a><div class="entry-header"><h2 class="entry-title"><a href="'}${''}${_0x74e9x2a}${''}${'">'}${''}${_0x74e9x29}${''}${'</a></h2>'}${''}${_0x74e9x2d[0]}${''}${'</div></div>'}${''}`;
        break;
    case 'video':
        _0x74e9x9 = 0 === _0x74e9x5 ? `${''}${'<div class="post cs item-'}${''}${_0x74e9x5}${''}${'"><a class="entry-inner" href="'}${''}${_0x74e9x2a}${''}${'" title="'}${''}${_0x74e9x29}${''}${'"><span class="entry-thumbnail'}${''}${_0x74e9x2c[1]}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x74e9x2b}${''}${'"></span></span><div class="entry-header">'}${''}${_0x74e9xc}${''}${'<h2 class="entry-title">'}${''}${_0x74e9x29}${''}${'</h2>'}${''}${_0x74e9x2d[0]}${''}${'</div></a></div>'}${''}` : (1 == _0x74e9x5 ? `${''}${'<div class="'}${''}${_0x74e9x3}${''}${'-grid">'}${''}` : '') + `${''}${'<div class="post item-'}${''}${_0x74e9x5}${''}${'"><a class="entry-thumbnail'}${''}${_0x74e9x2c[3]}${''}${'" href="'}${''}${_0x74e9x2a}${''}${'" title="'}${''}${_0x74e9x29}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x74e9x2b}${''}${'"></span></a><div class="entry-header"><h2 class="entry-title"><a href="'}${''}${_0x74e9x2a}${''}${'">'}${''}${_0x74e9x29}${''}${'</a></h2>'}${''}${_0x74e9x2d[1]}${''}${'</div></div>'}${''}`;
        break;
    case 'card':
        _0x74e9x9 = `${''}${'<a class="entry-link" href="'}${''}${_0x74e9x2a}${''}${'" target="'}${''}${_0x74e9x8}${''}${'" title="'}${''}${_0x74e9x29}${''}${'"><span class="entry-thumbnail'}${''}${_0x74e9x2c[2]}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x74e9x2b}${''}${'"></span></span><div class="entry-header">'}${''}${_0x74e9x7}${''}${'<h2 class="entry-title">'}${''}${_0x74e9x29}${''}${'</h2>'}${''}${_0x74e9x2d[0]}${''}${'</div></a>'}${''}`;
        break;
    case 'related':
        _0x74e9x9 = _0x74e9x5 != _0x74e9x6 - 1 ? `${''}${'<div class="post item-'}${''}${_0x74e9x5}${''}${'"><a class="entry-thumbnail'}${''}${_0x74e9x2c[2]}${''}${'" href="'}${''}${_0x74e9x2a}${''}${'" title="'}${''}${_0x74e9x29}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x74e9x2b}${''}${'"></span></a><div class="entry-header"><h2 class="entry-title"><a href="'}${''}${_0x74e9x2a}${''}${'">'}${''}${_0x74e9x29}${''}${'</a></h2>'}${''}${_0x74e9x2d[1]}${''}${'</div></div>'}${''}` : '';
        break;
    case 'side':
        _0x74e9x9 = `${''}${'<div class="post item-'}${''}${_0x74e9x5}${''}${'"><a class="entry-thumbnail'}${''}${_0x74e9x2c[3]}${''}${'" href="'}${''}${_0x74e9x2a}${''}${'" title="'}${''}${_0x74e9x29}${''}${'"><span class="thumbnail" data-src="'}${''}${_0x74e9x2b}${''}${'"></span></a><div class="entry-header"><h2 class="entry-title"><a href="'}${''}${_0x74e9x2a}${''}${'">'}${''}${_0x74e9x29}${''}${'</a></h2>'}${''}${_0x74e9x2d[1]}${''}${'</div></div>'}${''}`
    };
    return _0x74e9x9
}

function getRecentPostsData(_0x74e9x2) {
    let _0x74e9x3 = $.ajax({
            url: getFeedUrl(_0x74e9x2, 'recent'),
            type: 'GET',
            async: !1,
            dataType: 'html',
            cache: !0,
            success: function (_0x74e9x2) {
                return _0x74e9x2
            }
        }).responseText,
        _0x74e9x4 = JSON.parse($(_0x74e9x3).find('#data').text()),
        _0x74e9x5 = _0x74e9x4.posts;
    return _0x74e9x5
}

function getPosts(_0x74e9x2) {
    let _0x74e9x3 = _0x74e9x2.t,
        _0x74e9x4 = _0x74e9x2.type,
        _0x74e9x5 = _0x74e9x2.num,
        _0x74e9x6 = _0x74e9x2.label ? _0x74e9x2.label : 'recent',
        _0x74e9x7 = _0x74e9x2.id,
        _0x74e9x8 = _0x74e9x2.link,
        _0x74e9x9 = _0x74e9x2.headline,
        _0x74e9xa = _0x74e9x2.target;
    $.ajax({
        url: 'card' != _0x74e9x4 && 'search' != _0x74e9x4 ? getFeedUrl(_0x74e9x5, _0x74e9x6) : _0x74e9x8,
        type: 'GET',
        async: !0,
        dataType: 'html',
        cache: !0,
        beforeSend: function (_0x74e9x2) {
            switch (_0x74e9x4) {
            case 'mega':
                _0x74e9x3.append(`${''}${'<div class="ul on-load">'}${''}${beforeLoader()}${''}${'</div>'}${''}`).addClass('loaded');
                break;
            case 'megatabs':
                _0x74e9x3.html(beforeLoader()).addClass('loaded');
                break;
            case 'search':
                _0x74e9x3.html(beforeLoader()).removeClass('scroll').parent().addClass('visible').find('.view-all').remove();
                break;
            case 'card':
                ;
            case 'related':
                _0x74e9x3.html(beforeLoader());
                break;
            default:
                _0x74e9x3.html(beforeLoader()).parent().addClass('type-' + _0x74e9x4)
            }
        },
        success: function (_0x74e9x2) {
            let _0x74e9x8 = '',
                _0x74e9xb = 0,
                _0x74e9xc = !1;
            switch (_0x74e9x4) {
            case 'mega':
                _0x74e9x8 = '<div class="ul mega-items">';
                break;
            case 'megatabs':
                _0x74e9x8 = '<div class="mega-items">';
                break;
            case 'ticker':
                _0x74e9x8 = '<div class="pbt-ticker ticker-items">';
                break;
            case 'search':
                ;
            case 'featured':
                ;
            case 'side':
                ;
            case 'related':
                _0x74e9x8 = `${''}${'<div class="'}${''}${_0x74e9x4}${''}${'-items">'}${''}`;
                break;
            default:
                _0x74e9x8 = 'card' != _0x74e9x4 ? `${''}${'<div class="content-block '}${''}${_0x74e9x4}${''}${'-items">'}${''}` : ''
            };
            let _0x74e9x29 = $(_0x74e9x2).find('#data');
            if (_0x74e9x29.length) {
                let _0x74e9x2a = JSON.parse(_0x74e9x29.text()),
                    _0x74e9x2b = 'card' != _0x74e9x4 ? _0x74e9x2a.posts : _0x74e9x2a.postData;
                if (_0x74e9x2b) {
                    if ('related' == _0x74e9x4) {
                        1 == _0x74e9x2b.length && 'recent' != _0x74e9x6 && (_0x74e9x2b = getRecentPostsData(_0x74e9x5));
                        let _0x74e9x2c = _0x74e9x2b.length;
                        for (let _0x74e9x2d = 0; _0x74e9x2d < _0x74e9x2c; _0x74e9x2d++) {
                            let _0x74e9x30 = _0x74e9x2b[_0x74e9x2d];
                            if (1 != _0x74e9x2b.length && getPostID(_0x74e9x30) == _0x74e9x7) {
                                _0x74e9x2b.splice(_0x74e9x2d, 1);
                                break
                            }
                        }
                    };
                    let _0x74e9x31 = _0x74e9x2b.length;
                    for (let _0x74e9x32 = 0; _0x74e9x32 < _0x74e9x31; _0x74e9x32++) {
                        let _0x74e9x33 = _0x74e9x2b[_0x74e9x32];
                        _0x74e9x8 += getPostContent({
                            type: _0x74e9x4,
                            post: _0x74e9x33,
                            index: _0x74e9x32,
                            num: _0x74e9x5,
                            headline: _0x74e9x9,
                            target: _0x74e9xa
                        })
                    };
                    _0x74e9xb = _0x74e9x31
                } else {
                    _0x74e9xc = !0
                }
            } else {
                _0x74e9xc = !0
            };
            switch (_0x74e9x4) {
            case 'mega':
                _0x74e9x8 += '</div>', _0x74e9x8 = _0x74e9xc ? `${''}${'<div class="ul no-items">'}${''}${msgError()}${''}${'</div>'}${''}` : _0x74e9x8, _0x74e9x3.addClass(_0x74e9x4).find('.ul').replaceWith(_0x74e9x8);
                break;
            case 'video':
                if (_0x74e9x8 += '</div>', _0x74e9x8 = _0x74e9xc ? msgError(_0x74e9x4) : _0x74e9x8, _0x74e9x3.html(_0x74e9x8), !_0x74e9xc && pbt.videoCover) {
                    let _0x74e9x34 = _0x74e9x3.find('.item-0 .thumbnail').data('src');
                    _0x74e9x3.parent('.widget').addClass('has-thumb').attr('style', `${''}${"background-image:url('"}${''}${_0x74e9x34}${''}${"')"}${''}`)
                };
                break;
            default:
                _0x74e9x8 += 'card' != _0x74e9x4 ? '</div>' : '', _0x74e9x8 = _0x74e9xc ? msgError(_0x74e9x4) : _0x74e9x8, _0x74e9x3.html(_0x74e9x8), 'search' == _0x74e9x4 && (_0x74e9x5 < _0x74e9xb && _0x74e9x3.parent().append(`${''}${'<a class="view-all btn" href="/search?q='}${''}${_0x74e9x6}${''}${'&by-date=true">'}${''}${pbt .viewAll }${''}${'</a>'}${''}`), setTimeout(function () {
                    _0x74e9x3.addClass('scroll')
                }, 500))
            };
            switch (_0x74e9x4) {
            case 'mega':
                ;
            case 'megatabs':
                ;
            case 'search':
                _0x74e9x3.find('span.thumbnail').pbtLazy({
                    onScroll: !1
                });
                break;
            case 'ticker':
                _0x74e9x3.pbtTicker();
                break;
            default:
                _0x74e9x3.find('span.thumbnail').pbtLazy()
            }
        },
        error: function () {
            'mega' === _0x74e9x4 ? _0x74e9x3.find('.ul').replaceWith(`${''}${'<div class="ul no-items">'}${''}${msgError()}${''}${'</div>'}${''}`) : _0x74e9x3.html(msgError(_0x74e9x4))
        }
    })
}

function megaTabs(_0x74e9x2, _0x74e9x3) {
    let _0x74e9x4, _0x74e9x5 = _0x74e9x3.length,
        _0x74e9x6 = '<div class="ul mega-tabs">';
    for (let _0x74e9x7 = 0; _0x74e9x7 < _0x74e9x5; _0x74e9x7++) {
        _0x74e9x3[_0x74e9x7] && _0x74e9x7 <= 4 && (_0x74e9x6 += `${''}${'<div class="mega-tab" data-tab="'}${''}${_0x74e9x3[_0x74e9x7]}${''}${'" data-url="/search/label/'}${''}${_0x74e9x3[_0x74e9x7]}${''}${'"></div>'}${''}`)
    };

    function _0x74e9x8() {
        _0x74e9x2.find('.mega-tab').length == _0x74e9x2.find('.mega-tab.loaded').length ? clearInterval(_0x74e9x4) : _0x74e9x2.find('.mega-tab.active').not('.loaded').each(function () {
            let _0x74e9x2 = $(this);
            _0x74e9x3 = _0x74e9x2.data('tab'), getPosts({
                t: _0x74e9x2,
                type: 'megatabs',
                num: 5,
                label: _0x74e9x3
            })
        })
    }
    _0x74e9x6 += '</div>', _0x74e9x2.addClass('megatabs').append(_0x74e9x6).children('a').on('click', function (_0x74e9x2) {
        _0x74e9x2.preventDefault()
    }), _0x74e9x2.mouseenter(function () {
        _0x74e9x4 = setInterval(_0x74e9x8, 100)
    }).mouseleave(function () {
        clearInterval(_0x74e9x4)
    }), _0x74e9x2.find('.mega-tabs').pbtTabs({
        onHover: !0,
        isLinked: !0,
        animated: !1,
        transition: 'fadeIn'
    })
}

function getSearch(_0x74e9x2, _0x74e9x3) {
    let _0x74e9x4 = _0x74e9x2.val(),
        _0x74e9x5 = _0x74e9x4.trim();
    '' != _0x74e9x5 && _0x74e9x5 != localStorage.search_term && (localStorage.search_term = _0x74e9x5, getPosts({
        t: _0x74e9x3,
        type: 'search',
        num: 4,
        label: _0x74e9x5,
        link: `${''}${'/search/?q='}${''}${_0x74e9x5}${''}${'&by-date=true&max-results=5&amp=1'}${''}`
    }))
}

function getPostCard() {
    $('.gTkWKr').each(function () {
        let _0x74e9x2 = $(this),
            _0x74e9x3 = _0x74e9x2.data('url'),
            _0x74e9x4 = _0x74e9x2.data('title'),
            _0x74e9x5 = _0x74e9x2.data('target'),
            _0x74e9x6 = _0x74e9x4 ? `${''}${'<span class="entry-headline">'}${''}${_0x74e9x4}${''}${'</span>'}${''}` : '';
        _0x74e9x3 ? (_0x74e9x2.removeAttr('data-url').removeAttr('data-title').removeAttr('data-target'), $w.on('load resize scroll', function _0x74e9x4() {
            $w.scrollTop() + $w.height() >= _0x74e9x2.offset().top && ($w.off('load resize scroll', _0x74e9x4), getPosts({
                t: _0x74e9x2,
                type: 'card',
                link: _0x74e9x3,
                headline: _0x74e9x6,
                target: _0x74e9x5
            }))
        }).trigger('scroll')) : _0x74e9x2.html(msgError())
    })
}

function getStickySidebar(_0x74e9x2) {
    $(_0x74e9x2).each(function () {
        if (pbt.stickySidebar) {
            let _0x74e9x2 = pbt.stickyMenu ? $('.header-inner').height() + 30 : 30;
            $(this).pbtStickySidebar({
                containerSelector: '.content-wrap > .container',
                additionalMarginTop: _0x74e9x2,
                additionalMarginBottom: 30
            })
        }
    })
}

function disqusComments(_0x74e9x2) {
    let _0x74e9x3 = document.getElementsByTagName('head')[0],
        _0x74e9x4 = document.createElement('script');
    _0x74e9x4.type = 'text/javascript', _0x74e9x4.async = !0, _0x74e9x4.src = `${''}${'https://'}${''}${_0x74e9x2}${''}${'.disqus.com/blogger_item.js'}${''}`, _0x74e9x3.appendChild(_0x74e9x4)
}

function beautiAvatar(_0x74e9x2) {
    $(_0x74e9x2).attr('src', function (_0x74e9x2, _0x74e9x3) {
        let _0x74e9x4 = '//blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiCxxt0n6b048h4UEHf-L5T22U8xCk-IsG2qbfVUMBMKdt2t3ijO6qz--5UBg63qH4V_6z8uIBe7z6VNnueFbF3XKIWkCJPmFQqfm3Rmx3tpBOk74LGDZrUEgGnJF2-VDrzlkZSVyJs2sYjtiCytrEjsw23o88dqy5mdjw0KPwNuySVA7iYfdHWYpgsuQ/s35/avatar.webp';
        return _0x74e9x3 = _0x74e9x3.replace('//resources.blogblog.com/img/blank.gif', _0x74e9x4).replace('//lh3.googleusercontent.com/zFdxGE77vvD2w5xHy6jkVuElKv-U9_9qLkRYK8OnbDeJPtjSZ82UPq5w6hJ-SA=s35', _0x74e9x4).replace('/s35', '/s39-rw').replace('=s35', '=s39-rw')
    })
}
$('#bCjqMi').pbtMenu(), $h.each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = localStorage.dark_mode;
    !0 != pbt.isDark && !1 != pbt.userDarkMode && ('true' == _0x74e9x3 && (_0x74e9x2.addClass('ejLOUz'), darkModeLogo(_0x74e9x3)), $('.darkmode-toggle').on('click', function () {
        $(this), _0x74e9x2.toggleClass('ejLOUz'), _0x74e9x3 = 'true' != _0x74e9x3 ? 'true' : 'false', localStorage.dark_mode = _0x74e9x3, darkModeLogo(_0x74e9x3)
    }))
}), $('.dark-logo').each(function () {
    !0 == pbt.isDark && darkModeLogo('true')
}), $('.search-toggle').on('click', function (_0x74e9x2) {
    openSearch(), closeSearch()
}), $w.on('keydown', function (_0x74e9x2) {
    _0x74e9x2.ctrlKey && 75 == _0x74e9x2.keyCode && (_0x74e9x2.preventDefault(), openSearch(), closeSearch())
}), $('#trending .PopularPosts .widget-content').pbtTicker(), $('.social-icons a').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = _0x74e9x2.attr('href'),
        _0x74e9x4 = _0x74e9x3.split('#'),
        _0x74e9x5 = _0x74e9x2.data('text');
    if (_0x74e9x4[1] && !0 == _0x74e9x5) {
        let _0x74e9x6 = _0x74e9x4[1].trim();
        '' != _0x74e9x6 && _0x74e9x2.append(`${''}${'<span class="text">'}${''}${_0x74e9x6}${''}${'</span>'}${''}`)
    };
    _0x74e9x2.attr('href', _0x74e9x4[0].trim())
}), $('.MailChimp .widget-content').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = _0x74e9x2.data('shortcode');
    if (_0x74e9x3) {
        let _0x74e9x4 = getAttr(_0x74e9x3, 'title'),
            _0x74e9x5 = getAttr(_0x74e9x3, 'text');
        !1 != _0x74e9x4 && _0x74e9x2.find('.mailchimp-title').html(_0x74e9x4), !1 != _0x74e9x5 && _0x74e9x2.find('.mailchimp-text').html(_0x74e9x5)
    }
}), $('.post-body a').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = _0x74e9x2.text(),
        _0x74e9x4 = getAttr(_0x74e9x3, 'text');
    if (_0x74e9x3.match('getButton') && _0x74e9x4 && (_0x74e9x2.replaceText(/([^{\}]+(?=}))/g, '<em>$1</em>'), _0x74e9x2.find('em').replaceText('$', '%s'), _0x74e9x2.each(function () {
            let _0x74e9x2 = $(this),
                _0x74e9x3 = _0x74e9x2.text(),
                _0x74e9x4 = getAttr(_0x74e9x3, 'text'),
                _0x74e9x5 = getAttr(_0x74e9x3, 'icon'),
                _0x74e9x6 = getAttr(_0x74e9x3, 'color'),
                _0x74e9x7 = getAttr(_0x74e9x3, 'size'),
                _0x74e9x8 = getAttr(_0x74e9x3, 'info'),
                _0x74e9x9 = getAttr(_0x74e9x3, 'id'),
                _0x74e9xa = _0x74e9x2.parent().attr('style');
            _0x74e9x2.addClass(_0x74e9x7 ? 'button btn x2' : 'button btn').text(_0x74e9x4.replace('%s', '$')), _0x74e9x9 && _0x74e9x2.attr('href', _0x74e9x2.attr('href') + '#gd=' + btoa(_0x74e9x9)), !1 != _0x74e9x5 && _0x74e9x2.addClass(_0x74e9x5), _0x74e9x6 && _0x74e9x2.addClass('color').attr('style', `${''}${'background:'}${''}${_0x74e9x6}${''}${';'}${''}`), _0x74e9xa && _0x74e9xa.match('center') && _0x74e9x2.addClass('is-c'), _0x74e9x8 && (_0x74e9x2.addClass(_0x74e9x5 ? 'x2 ' + _0x74e9x5 : 'x2'), _0x74e9x2.append(`${''}${'<span class="btn-info">'}${''}${_0x74e9x8 .replace ('%s','$')}${''}${'</span>'}${''}`))
        })), _0x74e9x3.match('getCard')) {
        let _0x74e9x5 = getAttr(_0x74e9x3, 'type'),
            _0x74e9x6 = getAttr(_0x74e9x3, 'title'),
            _0x74e9x7 = _0x74e9x2.attr('href'),
            _0x74e9x8 = _0x74e9x2.attr('target');
        switch (_0x74e9x5) {
        case 'download':
            ;
        case 'product':
            ;
        case 'custom':
            _0x74e9x2.replaceText(/([^{\}]+(?=}))/g, '<em>$1</em>'), _0x74e9x2.find('em').replaceText('$', '%s'), _0x74e9x2.each(function () {
                let _0x74e9x2 = $(this),
                    _0x74e9x3 = _0x74e9x2.text(),
                    _0x74e9x4 = getAttr(_0x74e9x3, 'button'),
                    _0x74e9x6 = getAttr(_0x74e9x3, 'icon'),
                    _0x74e9x9 = getAttr(_0x74e9x3, 'title'),
                    _0x74e9xa = getAttr(_0x74e9x3, 'info'),
                    _0x74e9xb = getAttr(_0x74e9x3, 'id');
                _0x74e9xa = _0x74e9xa ? `${''}${'<span class="card-meta">'}${''}${_0x74e9xa .replace ('%s','$')}${''}${'</span>'}${''}` : '', _0x74e9x2.replaceWith(`${''}${'<div class="cta-card '}${''}${_0x74e9x5}${''}${'"><div class="card-header"><div class="card-icon"><i class="bi" data-icon="'}${''}${_0x74e9x6||('download'==_0x74e9x5?'&#xF295;':'product'==_0x74e9x5?'&#xF242;':'&#xF4B1;')}${''}${'"></i></div><div class="card-info"><span class="card-title">'}${''}${_0x74e9x9||pbt .noTitle }${''}${'</span>'}${''}${_0x74e9xa}${''}${'</div></div><a class="card-btn btn" href="'}${''}${_0x74e9x7?'download'==_0x74e9x5&&_0x74e9xb?_0x74e9x7+'#gd='+btoa(_0x74e9xb):_0x74e9x7:'#'}${''}${'" target="'}${''}${_0x74e9x8||'_self'}${''}${'">'}${''}${_0x74e9x4||'<i class="bi bi-box-arrow-up-right"></i>'}${''}${'</a></div>'}${''}`)
            });
            break;
        default:
            _0x74e9x2.replaceWith(`${''}${'<div class="gTkWKr" data-url="'}${''}${_0x74e9x7}${''}${'" data-title="'}${''}${_0x74e9x6}${''}${'" data-target="'}${''}${_0x74e9x8||'_self'}${''}${'"/>'}${''}`)
        }
    }
}), $('.post-body blockquote').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = [{
            shc: '{alertSuccess}',
            cls: 'success'
        }, {
            shc: '{alertInfo}',
            cls: 'info'
        }, {
            shc: '{alertWarning}',
            cls: 'warning'
        }, {
            shc: '{alertError}',
            cls: 'error'
        }, {
            shc: '{codeBox}',
            cls: 'code'
        }],
        _0x74e9x4 = _0x74e9x2.text(),
        _0x74e9x5 = _0x74e9x2.html();

    function _0x74e9x6(_0x74e9x3, _0x74e9x6) {
        _0x74e9x4.trim().match(_0x74e9x3) && (_0x74e9x5 = _0x74e9x5.replace(_0x74e9x3, ''), _0x74e9x2.replaceWith('code' != _0x74e9x6 ? `${''}${'<div class="alert-message alert-'}${''}${_0x74e9x6}${''}${'">'}${''}${_0x74e9x5}${''}${'</div>'}${''}` : `${''}${'<pre class="code-box">'}${''}${_0x74e9x5}${''}${'</pre>'}${''}`))
    }
    for (let _0x74e9x7 in _0x74e9x3) {
        _0x74e9x6(_0x74e9x3[_0x74e9x7].shc, _0x74e9x3[_0x74e9x7].cls)
    }
}), setDataKey(), $('.post-body b').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = _0x74e9x2.text();

    function _0x74e9x4(_0x74e9x2) {
        return _0x74e9x3.trim().match(_0x74e9x2)
    }
    if ((_0x74e9x4(/\$ads=\{1\}/g) || _0x74e9x4(/\$ads=\{2\}/g) || _0x74e9x4('{ads}')) && _0x74e9x2.replaceWith('<div class="article-ads"/>'), _0x74e9x4('{nextPage}') && _0x74e9x2.replaceWith('<!-- nextpage -->'), _0x74e9x4('{getToc}')) {
        let _0x74e9x5 = getAttr(_0x74e9x3, 'title'),
            _0x74e9x6 = getAttr(_0x74e9x3, 'count');
        _0x74e9x5 = _0x74e9x5 || 'Table of Contents', _0x74e9x2.replaceWith(`${''}${'<div class="pbt-toc-wrap"><div class="pbt-toc-inner"><button class="pbt-toc-title" aria-label="'}${''}${_0x74e9x5}${''}${'"><span class="pbt-toc-title-text">'}${''}${_0x74e9x5}${''}${'</span></button><ol id="pbt-toc" data-count="'}${''}${_0x74e9x6||'true'}${''}${'"></ol></div></div>'}${''}`);
        let _0x74e9x7 = $('#pbt-toc');
        $('.pbt-toc-title').on('click', function () {
            $(this).toggleClass('is-expanded'), _0x74e9x7.slideToggle(170)
        }), _0x74e9x7.pbtToc({
            content: '#post-body',
            headings: 'h2,h3,h4'
        }), _0x74e9x7.find('a').each(function () {
            let _0x74e9x2 = $(this);
            _0x74e9x2.on('click', function (_0x74e9x3) {
                return _0x74e9x3.preventDefault(), $('html,body').animate({
                    scrollTop: $(_0x74e9x2.attr('href')).offset().top - 20
                }, 500), !1
            })
        })
    };

    function _0x74e9x8(_0x74e9x3, _0x74e9x5) {
        _0x74e9x4(_0x74e9x3) && ($b.addClass(_0x74e9x5), _0x74e9x2.remove(), 'is-right' == _0x74e9x5 && $b.removeClass('is-left'))
    }
    _0x74e9x4('{contactForm}') && (_0x74e9x2.replaceWith('<div class="contact-form-widget"/>'), $('.post-body .contact-form-widget').append($('#ContactForm1 form')));
    let _0x74e9x9 = [{
        shc: '{leftSidebar}',
        cls: 'is-left'
    }, {
        shc: '{rightSidebar}',
        cls: 'is-right'
    }, {
        shc: '{fullWidth}',
        cls: 'no-sidebar'
    }];
    for (let _0x74e9xa in _0x74e9x9) {
        _0x74e9x8(_0x74e9x9[_0x74e9xa].shc, _0x74e9x9[_0x74e9xa].cls)
    };
    if (_0x74e9x4('{getLink}')) {
        let _0x74e9xb = getAttr(_0x74e9x3, 'seconds'),
            _0x74e9xc = getAttr(_0x74e9x3, 'before'),
            _0x74e9x29 = getAttr(_0x74e9x3, 'after'),
            _0x74e9x2a = getAttr(_0x74e9x3, 'message'),
            _0x74e9x2b = getAttr(_0x74e9x3, 'size');
        _0x74e9x2.replaceWith(`${''}${'<div class="flex-c"><div class="gd-link"><div class="gd-countdown"><span class="gd-seconds">'}${''}${_0x74e9xb||'15'}${''}${'</span><span class="gd-message">'}${''}${_0x74e9x2a||'Please wait...'}${''}${'</span></div><button class="get-link button btn link'}${''}${_0x74e9x2b?' x2':''}${''}${'" disabled>'}${''}${_0x74e9xc||'Generate Link'}${''}${'</button><button class="goto-link button btn link'}${''}${_0x74e9x2b?' x2':''}${''}${'">'}${''}${_0x74e9x29||'Go to Link'}${''}${'</button></div></div>'}${''}`), $('.gd-link').each(function () {
            let _0x74e9x2 = $(this),
                _0x74e9x3 = _0x74e9x2.find('.get-link'),
                _0x74e9x4 = _0x74e9x2.find('.goto-link'),
                _0x74e9x5 = _0x74e9x2.find('.gd-seconds'),
                _0x74e9x6 = window.location.href,
                _0x74e9x7 = _0x74e9x6.match(/\?/g) ? '&' : '?',
                _0x74e9x8 = new URL(_0x74e9x6.replace('#', _0x74e9x7)),
                _0x74e9x9 = new URLSearchParams(_0x74e9x8.search),
                _0x74e9xa = _0x74e9x9.get('gd'),
                _0x74e9xc = _0x74e9x9.get('go'),
                _0x74e9x29 = _0x74e9xb ? Number(_0x74e9xb) - 1 : 14;
            _0x74e9xa ? localStorage.gd_key = _0x74e9xa : localStorage.gd_key = 0, _0x74e9xc ? localStorage.go_key = _0x74e9xc : localStorage.go_key = 0, (_0x74e9xa || _0x74e9xc) && _0x74e9x3.removeAttr('disabled').on('click', function () {
                if (_0x74e9x3.not('[disabled]')) {
                    _0x74e9x2.addClass('loading');
                    let _0x74e9x4 = setInterval(function _0x74e9x3() {
                        0 == _0x74e9x29 ? (clearTimeout(_0x74e9x4), _0x74e9x2.addClass('loaded').removeClass('loading'), $('.gd-btn').removeAttr('disabled')) : (_0x74e9x5.text(_0x74e9x29), _0x74e9x29--)
                    }, 1e3)
                }
            }), _0x74e9x4.on('click', function () {
                $('html,body').animate({
                    scrollTop: $('.gd-btn').offset().top - $w.height() / 2 + $('.gd-btn').height() / 2
                }, 500)
            })
        })
    };
    if (_0x74e9x4('{getDownload}')) {
        let _0x74e9x2c = getAttr(_0x74e9x3, 'button'),
            _0x74e9x2d = getAttr(_0x74e9x3, 'size');
        _0x74e9x2.replaceWith(`${''}${'<div class="flex-c"><button class="gd-btn button btn download'}${''}${_0x74e9x2d?' x2':''}${''}${'" disabled><div class="loader"><svg class="spinner" viewBox="0 0 50 50"><circle class="path" cx="25" cy="25" r="20"></circle></svg></div>'}${''}${_0x74e9x2c||'Download'}${''}${'</button></div>'}${''}`), $('.gd-btn').each(function () {
            let _0x74e9x2 = $(this);
            _0x74e9x2.on('click', function () {
                if (_0x74e9x2.not('[disabled]')) {
                    let _0x74e9x3 = localStorage.gd_key,
                        _0x74e9x4 = localStorage.go_key,
                        _0x74e9x5 = 0 != _0x74e9x3 ? `${''}${'https://drive.google.com/uc?id='}${''}${atob(_0x74e9x3)}${''}${'&export=download'}${''}` : 0 != _0x74e9x4 && atob(_0x74e9x4);
                    _0x74e9x5 && (_0x74e9x2.addClass('loading'), setTimeout(function () {
                        window.open(_0x74e9x5, '_self'), _0x74e9x2.removeClass('loading')
                    }, 2e3))
                }
            })
        })
    };
    if (_0x74e9x4('{getContinue}')) {
        let _0x74e9x30 = getAttr(_0x74e9x3, 'button'),
            _0x74e9x31 = getAttr(_0x74e9x3, 'size');
        _0x74e9x2.replaceWith(`${''}${'<div class="flex-c"><button class="go-btn button btn continue'}${''}${'1'==_0x74e9x31?' x1':' x2'}${''}${'" disabled>'}${''}${_0x74e9x30||'Continue'}${''}${'</button></div>'}${''}`), $('.go-btn').each(function () {
            let _0x74e9x2 = $(this),
                _0x74e9x3 = window.location.href,
                _0x74e9x4 = _0x74e9x3.match(/\?/g) ? '&' : '?',
                _0x74e9x5 = new URL(_0x74e9x3.replace('#', _0x74e9x4)),
                _0x74e9x6 = new URLSearchParams(_0x74e9x5.search),
                _0x74e9x7 = _0x74e9x6.get('go'),
                _0x74e9x8 = !!_0x74e9x7 && atob(_0x74e9x7);
            _0x74e9x8 && (_0x74e9x2.removeAttr('disabled'), _0x74e9x2.on('click', function () {
                _0x74e9x2.not('[disabled]') && window.open(_0x74e9x8, '_self')
            }))
        })
    }
}), $('.article-ads').each(function () {
    $('#cFdGuq').length && pAd('#cFdGuq', $(this))
}), $('.post-footer-ads').each(function () {
    $('#lebXej').length && pAd('#lebXej', $(this))
}), $('.item-post').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = _0x74e9x2.find('.post-body'),
        _0x74e9x4 = _0x74e9x2.find('.pagination'),
        _0x74e9x5 = _0x74e9x3.html().split(/<!\-\-\s*nextpage\s*\-\->/i),
        _0x74e9x6 = _0x74e9x5.length,
        _0x74e9x7 = 0;
    if (_0x74e9x6 > 1) {
        function _0x74e9x8() {
            let _0x74e9x2 = window.location.href,
                _0x74e9x8 = _0x74e9x2.match(/\?/g) ? '&' : '?',
                _0x74e9x9 = new URL(_0x74e9x2.replace('#', _0x74e9x8)),
                _0x74e9xa = new URLSearchParams(_0x74e9x9.search),
                _0x74e9xb = _0x74e9xa.get('page');
            _0x74e9x7 = (_0x74e9x7 = Number(0 == _0x74e9xb || _0x74e9xb < 0 ? 1 : _0x74e9xb || 1) - 1) >= _0x74e9x6 ? _0x74e9x6 - 1 : _0x74e9x7, _0x74e9x3.html(_0x74e9x5[_0x74e9x7]),
                function _0x74e9x2(_0x74e9x3) {
                    let _0x74e9x5 = 'undefined' != typeof pageOf ? pageOf : 'Page {page} of {pages}',
                        _0x74e9x7 = 'undefined' != typeof prevMsg ? prevMsg : 'Previous',
                        _0x74e9x8 = 'undefined' != typeof nextMsg ? nextMsg : 'Next',
                        _0x74e9x9 = _0x74e9x3 + 1,
                        _0x74e9xa = _0x74e9x9 > 1 ? `${''}${'<a href="#page='}${''}${_0x74e9x3}${''}${'" class="prev btn">'}${''}${_0x74e9x7}${''}${'</a>'}${''}` : '',
                        _0x74e9xb = _0x74e9x9 < _0x74e9x6 ? `${''}${'<a href="#page='}${''}${_0x74e9x3+2}${''}${'" class="next btn">'}${''}${_0x74e9x8}${''}${'</a>'}${''}` : '';
                    _0x74e9x4.html(`${''}${''}${''}${_0x74e9xa}${''}${'<span class="info">'}${''}${_0x74e9x5 .replace ('{page}',_0x74e9x9>_0x74e9x6?_0x74e9x6:_0x74e9x9) .replace ('{pages}',_0x74e9x6)}${''}${'</span>'}${''}${_0x74e9xb}${''}${''}${''}`).addClass('visible')
                }(_0x74e9x7), _0x74e9x4.find('.btn').on('click', function () {
                    $('html, body').animate({
                        scrollTop: 0
                    }, 500)
                }), setDataKey(), getPostCard()
        }
        $w.on('hashchange', _0x74e9x8), _0x74e9x8()
    }
}), $('.pbt-wo').on('click', function (_0x74e9x2) {
    _0x74e9x2.preventDefault();
    let _0x74e9x3 = $(this),
        _0x74e9x4 = _0x74e9x3.attr('href'),
        _0x74e9x5 = window.open(_0x74e9x4, '_blank', 'scrollbars=yes,resizable=yes,toolbar=0,width=860,height=540,top=50,left=50');
    _0x74e9x5.focus()
}), $w.on('keydown', function (_0x74e9x2) {
    pbt.isPost && _0x74e9x2.ctrlKey && 83 == _0x74e9x2.keyCode && (_0x74e9x2.preventDefault(), openShare())
}), $('.post-share .show-more .btn, .share-toggle').on('click', function () {
    openShare()
}), $('.copy-link').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = _0x74e9x2.children('input');
    _0x74e9x3.on('click', function () {
        this.select()
    }), _0x74e9x2.children('button').on('click', function () {
        navigator.clipboard.writeText(_0x74e9x3.val()), _0x74e9x2.removeClass('copied-off').addClass('copied'), setTimeout(function () {
            _0x74e9x2.removeClass('copied').addClass('copied-off')
        }, 3e3)
    })
}), $('.about-author .author-text').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = _0x74e9x2.find('a');
    _0x74e9x3.length && (_0x74e9x3.each(function () {
        let _0x74e9x2 = $(this),
            _0x74e9x3 = _0x74e9x2.text().trim(),
            _0x74e9x4 = _0x74e9x2.attr('href'),
            _0x74e9x5 = 'external-link' == _0x74e9x3 ? 'website' : _0x74e9x3;
        _0x74e9x2.replaceWith(`${''}${'<li class="'}${''}${_0x74e9x5}${''}${'"><a class="bi-'}${''}${_0x74e9x5}${''}${'" href="'}${''}${_0x74e9x4}${''}${'" title="'}${''}${_0x74e9x5}${''}${'" rel="nofollow noopener" target="_blank"></a></li>'}${''}`)
    }), _0x74e9x2.parent().append('<ul class="author-links social color"></ul>'), _0x74e9x2.find('li').appendTo(_0x74e9x2.parent().find('.author-links')))
}), $w.on('keydown', function (_0x74e9x2) {
    pbt.isPost && (_0x74e9x2.ctrlKey && 37 == _0x74e9x2.keyCode ? (_0x74e9x2.preventDefault(), navShortcuts(pbt.isRTL ? '.post-nav-older-link' : '.post-nav-newer-link')) : _0x74e9x2.ctrlKey && 39 == _0x74e9x2.keyCode && (_0x74e9x2.preventDefault(), navShortcuts(pbt.isRTL ? '.post-nav-newer-link' : '.post-nav-older-link')))
}), $('.main-nav li.iDydjm').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = _0x74e9x2.find('a'),
        _0x74e9x4 = _0x74e9x3.data('shortcode');
    if (_0x74e9x4) {
        let _0x74e9x5 = getAttr(_0x74e9x4, 'label'),
            _0x74e9x6 = _0x74e9x5 || 'recent';
        if (_0x74e9x6) {
            let _0x74e9x7 = _0x74e9x6.split('/'),
                _0x74e9x8 = _0x74e9x6.match('/') && _0x74e9x7[1] ? 'tabs' : 'mega';
            if ('tabs' == _0x74e9x8) {
                megaTabs(_0x74e9x2, _0x74e9x7)
            } else {
                let _0x74e9x9 = 'recent' == _0x74e9x6 ? '/search' : `${''}${'/search/label/'}${''}${_0x74e9x6}${''}${''}${''}`;
                _0x74e9x2.mouseenter(function () {
                    _0x74e9x2.hasClass('loaded') || getPosts({
                        t: _0x74e9x2,
                        type: 'mega',
                        num: 5,
                        label: _0x74e9x6
                    })
                }).children('a').attr('href', _0x74e9x9)
            }
        } else {
            _0x74e9x2.append(`${''}${'<div class="ul no-items">'}${''}${msgError()}${''}${'</div>'}${''}`).addClass('loaded')
        }
    }
}), $('.nAJHul').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = _0x74e9x2.find('input'),
        _0x74e9x4 = _0x74e9x2.find('button'),
        _0x74e9x5 = _0x74e9x2.find('.search-results');
    _0x74e9x4.on('click', function () {
        getSearch(_0x74e9x3, _0x74e9x5)
    }), $w.on('keydown', function (_0x74e9x2) {
        13 == _0x74e9x2.keyCode && getSearch(_0x74e9x3, _0x74e9x5)
    })
}), $('#featured .HTML .widget-content').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = _0x74e9x2.data('shortcode');
    if (_0x74e9x3) {
        let _0x74e9x4 = getAttr(_0x74e9x3, 'label');
        _0x74e9x2.removeAttr('data-shortcode'), $w.on('load resize scroll', function _0x74e9x3() {
            $w.scrollTop() + $w.height() >= _0x74e9x2.offset().top && ($w.off('load resize scroll', _0x74e9x3), getPosts({
                t: _0x74e9x2,
                type: 'featured',
                num: 3,
                label: _0x74e9x4
            }))
        }).trigger('scroll')
    }
}), $('#trending .HTML .widget-content').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = _0x74e9x2.data('shortcode');
    if (_0x74e9x3) {
        let _0x74e9x4 = getAttr(_0x74e9x3, 'results'),
            _0x74e9x5 = getAttr(_0x74e9x3, 'label');
        _0x74e9x2.removeAttr('data-shortcode'), getPosts({
            t: _0x74e9x2,
            type: 'ticker',
            num: _0x74e9x4 || 5,
            label: _0x74e9x5
        })
    }
}), $('.tZAeWi .HTML .widget-content').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = _0x74e9x2.data('shortcode');
    if (_0x74e9x3) {
        let _0x74e9x4 = getAttr(_0x74e9x3, 'results'),
            _0x74e9x5 = getAttr(_0x74e9x3, 'label'),
            _0x74e9x6 = _0x74e9x5 || 'recent',
            _0x74e9x7 = getAttr(_0x74e9x3, 'type'),
            _0x74e9x8 = 4,
            _0x74e9x9 = _0x74e9x7 ? 'grid1' == _0x74e9x7 ? 'grid' : _0x74e9x7 : 'block1';
        'grid2' === _0x74e9x9 && (_0x74e9x8 = 6), _0x74e9x8 = _0x74e9x4 || _0x74e9x8, _0x74e9x8 = 'video' == _0x74e9x9 || 'block1' == _0x74e9x9 ? 5 : _0x74e9x8, 'col' == _0x74e9x9 && _0x74e9x2.parent().addClass('is-col'), _0x74e9x2.removeAttr('data-shortcode'), 'block1' == _0x74e9x9 || 'block2' == _0x74e9x9 || 'list' == _0x74e9x9 || 'grid' == _0x74e9x9 || 'grid2' == _0x74e9x9 || 'col' == _0x74e9x9 || 'video' == _0x74e9x9 ? (_0x74e9x6 && _0x74e9x2.parent().find('.title-link').attr('href', 'recent' == _0x74e9x6 ? '/search' : '/search/label/' + _0x74e9x6), $w.on('load resize scroll', function _0x74e9x3() {
            $w.scrollTop() + $w.height() >= _0x74e9x2.offset().top && ($w.off('load resize scroll', _0x74e9x3), getPosts({
                t: _0x74e9x2,
                type: _0x74e9x9,
                num: _0x74e9x8,
                label: _0x74e9x6
            }))
        }).trigger('scroll')) : _0x74e9x2.html(msgError())
    }
}), $('.getPosts .widget-content').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = _0x74e9x2.data('shortcode');
    if (_0x74e9x3) {
        let _0x74e9x4 = getAttr(_0x74e9x3, 'results'),
            _0x74e9x5 = _0x74e9x4 || 4,
            _0x74e9x6 = getAttr(_0x74e9x3, 'label');
        _0x74e9x2.removeAttr('data-shortcode'), $w.on('load resize scroll', function _0x74e9x3() {
            $w.scrollTop() + $w.height() >= _0x74e9x2.offset().top && ($w.off('load resize scroll', _0x74e9x3), getPosts({
                t: _0x74e9x2,
                type: 'side',
                num: _0x74e9x5,
                label: _0x74e9x6
            }))
        }).trigger('scroll')
    }
}), getPostCard(), $('#bVPWBg .HTML').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = _0x74e9x2.data('shortcode');
    _0x74e9x3 && $('.related-wrap').each(function () {
        let _0x74e9x4 = $(this),
            _0x74e9x5 = _0x74e9x4.find('.related-tag'),
            _0x74e9x6 = _0x74e9x5.data('id'),
            _0x74e9x7 = _0x74e9x5.data('label'),
            _0x74e9x8 = _0x74e9x4.find('.widget-content'),
            _0x74e9x9 = function _0x74e9x2() {
                let _0x74e9x4 = getAttr(_0x74e9x3, 'results'),
                    _0x74e9x5 = _0x74e9x4 ? Number(_0x74e9x4) + 1 : 4,
                    _0x74e9x6 = getAttr(_0x74e9x3, 'label');
                return [_0x74e9x5, _0x74e9x6]
            }(),
            _0x74e9xa = _0x74e9x9[0],
            _0x74e9xb = _0x74e9x9[1],
            _0x74e9xc = _0x74e9xb && _0x74e9xb != _0x74e9x7 && 'related' != _0x74e9xb ? _0x74e9xb : _0x74e9x7;
        _0x74e9xb && _0x74e9xb != _0x74e9x7 && 'related' != _0x74e9xb && _0x74e9x8.parent().find('.title-link').attr('href', '/search/label/' + _0x74e9xc), $w.on('load resize scroll', function _0x74e9x3() {
            $w.scrollTop() + $w.height() >= _0x74e9x8.offset().top && ($w.off('load resize scroll', _0x74e9x3), getPosts({
                t: _0x74e9x8,
                type: 'related',
                num: _0x74e9xa,
                label: _0x74e9xc,
                id: _0x74e9x6
            }), _0x74e9x2.parent().remove())
        }).trigger('scroll')
    })
}), $('.blog-post-comments').each(function () {
    let _0x74e9x2 = $(this),
        _0x74e9x3 = _0x74e9x2.data('shortcode'),
        _0x74e9x4 = getAttr(_0x74e9x3, 'type'),
        _0x74e9x5 = `${''}${''}${''}${_0x74e9x4}${''}${'-comments'}${''}`;
    switch (_0x74e9x4) {
    case 'disqus':
        let _0x74e9x6 = getAttr(_0x74e9x3, 'shortname');
        !1 != _0x74e9x6 && (disqus_shortname = _0x74e9x6), disqusComments(disqus_shortname), _0x74e9x2.addClass(_0x74e9x5 + ' visible');
        break;
    case 'facebook':
        let _0x74e9x7 = getAttr(_0x74e9x3, 'lang'),
            _0x74e9x8 = !1 != _0x74e9x7 ? `${''}${'https://connect.facebook.net/'}${''}${_0x74e9x7}${''}${'/all.js#xfbml=1&version=v14.0'}${''}` : 'https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v14.0';
        $('head').append(`${''}${'<script async="async" defer="defer" crossorigin="anonymous" src="'}${''}${_0x74e9x8}${''}${'" />'}${''}`), _0x74e9x2.addClass(_0x74e9x5).find('#comments').html(`${''}${'<div class="fb-comments" data-width="100%" data-href="'}${''}${disqus_blogger_current_url}${''}${'" order_by="time" data-numposts="5" data-lazy="true"></div>'}${''}`), _0x74e9x2.addClass('visible');
        break;
    default:
        _0x74e9x2.addClass('blogger-comments visible'), _0x74e9x2.find('#top-continue .comment-reply').addClass('btn'), beautiAvatar('.avatar-image-container img')
    };
    let _0x74e9x9 = _0x74e9x2.find('.comments .comment-reply'),
        _0x74e9xa = _0x74e9x2.find('.comments #top-continue'),
        _0x74e9xb = _0x74e9x2.find('.show-cf');
    _0x74e9x9.on('click', function (_0x74e9x3) {
        _0x74e9x3.preventDefault(), _0x74e9x2.addClass('cf-on'), _0x74e9xa.show(), _0x74e9xb.remove()
    }), _0x74e9xa.on('click', function (_0x74e9x2) {
        _0x74e9x2.preventDefault(), _0x74e9xa.hide()
    }), _0x74e9xb.on('click', function () {
        _0x74e9x2.addClass('cf-on'), _0x74e9xb.remove(), getStickySidebar('.main-wrap, .sidebar-wrap')
    })
}), $(function () {
    $('a#probtemplates').each(function () {
        var _0x74e9x2 = $(this),
            _0x74e9x3 = 'visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;font-size:14px!important;color:var(--footerbar-color)!important;margin:0!important;text-indent:0!important;';
        _0x74e9x2.attr('href', 'https://probloggertemplates.com/').text('Blogger Templates').attr('style', 'visibility:visible!important;opacity:1!important;position:relative!important;z-index:1!important;font-size:14px!important;color:var(--footerbar-color)!important;margin:0!important;text-indent:0!important;'), _0x74e9x2.parent().attr('style', _0x74e9x3).parent().attr('style', _0x74e9x3)
    }), setInterval(function () {
        $('a#probtemplates').length && $('a#probtemplates:visible').length || (window.location.href = 'https://probloggertemplates.com/')
    }, 1e3), $('.entry-thumbnail .thumbnail, .entry-avatar .avatar').not('.ynvXdm').pbtLazy(), $('.header-inner').each(function () {
        let _0x74e9x2 = $(this);
        if (!0 == pbt.stickyMenu && _0x74e9x2.length > 0) {
            let _0x74e9x3 = $(document).scrollTop(),
                _0x74e9x4 = _0x74e9x2.offset().top,
                _0x74e9x5 = _0x74e9x2.height(),
                _0x74e9x6 = _0x74e9x4 + 2 * _0x74e9x5;
            $w.scroll(function () {
                let _0x74e9x4 = $(document).scrollTop(),
                    _0x74e9x5 = _0x74e9x2.offset().top,
                    _0x74e9x7 = $('.main-header').offset().top + 1;
                _0x74e9x4 > _0x74e9x6 ? _0x74e9x2.addClass('is-fixed') : _0x74e9x5 <= _0x74e9x7 && _0x74e9x2.removeClass('is-fixed').removeClass('show'), _0x74e9x4 < _0x74e9x3 ? setTimeout(function () {
                    _0x74e9x5 >= _0x74e9x7 && _0x74e9x2.addClass('show')
                }, 170) : setTimeout(function () {
                    _0x74e9x2.removeClass('show')
                }, 170), _0x74e9x3 = _0x74e9x4
            })
        }
    }), $('.mobile-logo').each(function () {
        let _0x74e9x2 = $(this),
            _0x74e9x3 = $('.main-logo a').clone();
        _0x74e9x3.find('h1').remove(), _0x74e9x3.appendTo(_0x74e9x2)
    }), $('#mobile-menu').each(function () {
        let _0x74e9x2 = $(this),
            _0x74e9x3 = $('.main-nav').clone();
        _0x74e9x3.attr('class', 'mobile-nav').attr('id', 'mobile-nav'), _0x74e9x3.find('.iDydjm > .ul').remove(), _0x74e9x3.find('.iDydjm').not('.megatabs').removeAttr('class'), _0x74e9x3.find('.iDydjm > a').each(function () {
            let _0x74e9x2 = $(this),
                _0x74e9x3 = _0x74e9x2.data('shortcode');
            if (_0x74e9x3) {
                let _0x74e9x4 = getAttr(_0x74e9x3, 'label');
                if (_0x74e9x4) {
                    let _0x74e9x5 = _0x74e9x4.split('/'),
                        _0x74e9x6 = _0x74e9x4.match('/') && _0x74e9x5[1] ? 'tabs' : 'mega';
                    if ('tabs' == _0x74e9x6) {
                        let _0x74e9x7 = (_0x74e9x4 = _0x74e9x5).length,
                            _0x74e9x8 = '<ul class="sub-menu sm-1">';
                        for (let _0x74e9x9 = 0; _0x74e9x9 < _0x74e9x7; _0x74e9x9++) {
                            _0x74e9x4[_0x74e9x9] && (_0x74e9x8 += `${''}${'<li><a href="/search/label/'}${''}${_0x74e9x4[_0x74e9x9]}${''}${'">'}${''}${_0x74e9x4[_0x74e9x9]}${''}${'</a></li>'}${''}`)
                        };
                        _0x74e9x8 += '</ul>', _0x74e9x2.parent().append(_0x74e9x8)
                    } else {
                        let _0x74e9xa = 'recent' == _0x74e9x4 ? '/search' : `${''}${'/search/label/'}${''}${_0x74e9x4}${''}${''}${''}`;
                        _0x74e9x2.attr('href', _0x74e9xa)
                    }
                }
            }
        }), _0x74e9x3.appendTo(_0x74e9x2), $('.mobile-menu-toggle, .hide-mobile-menu').on('click', function () {
            $b.toggleClass('menu-on'), $('.menu-on .overlay-bg').on('click', function () {
                $b.removeClass('menu-on')
            })
        }), $('.mobile-menu .has-sub > a').on('click', function (_0x74e9x2) {
            _0x74e9x2.preventDefault();
            let _0x74e9x3 = $(this);
            _0x74e9x3.parent().hasClass('expanded') ? _0x74e9x3.parent().removeClass('expanded').children('.sub-menu').slideToggle(170) : _0x74e9x3.parent().addClass('expanded').children('.sub-menu').slideToggle(170)
        })
    }), $('.mm-footer').each(function () {
        let _0x74e9x2 = $(this),
            _0x74e9x3 = $('.about-section .LinkList .social-icons'),
            _0x74e9x4 = $('#footer-menu .link-list'),
            _0x74e9x5 = !!_0x74e9x3.length && _0x74e9x3.clone();
        !1 != _0x74e9x5 && (_0x74e9x5.attr('class', 'social-icons social color').find('.text').remove(), _0x74e9x2.append(_0x74e9x5));
        let _0x74e9x6 = !!_0x74e9x4.length && _0x74e9x4.clone();
        !1 != _0x74e9x6 && _0x74e9x2.append(_0x74e9x6)
    }), $('#amZWga').each(function () {
        let _0x74e9x2 = $(this),
            _0x74e9x3 = $('.blog-pager .loading'),
            _0x74e9x4 = 'visible',
            _0x74e9x5 = _0x74e9x2.data('url');
        _0x74e9x2.on('click', function (_0x74e9x6) {
            _0x74e9x6.preventDefault(), _0x74e9x2.removeClass(_0x74e9x4), $.ajax({
                url: _0x74e9x5,
                beforeSend: function () {
                    _0x74e9x3.addClass(_0x74e9x4)
                },
                success: function (_0x74e9x3) {
                    let _0x74e9x6 = $(_0x74e9x3).find('.blog-posts');
                    _0x74e9x6.find('.post').addClass('fadeInUp'), $('.blog-posts').append(_0x74e9x6.html()), (_0x74e9x5 = $(_0x74e9x3).find('#amZWga').data('url')) ? _0x74e9x2.addClass(_0x74e9x4) : (_0x74e9x2.removeClass(_0x74e9x4), $('.blog-pager .no-more').addClass(_0x74e9x4))
                },
                complete: function () {
                    _0x74e9x3.removeClass(_0x74e9x4), getStickySidebar('.main-wrap, .sidebar-wrap'), $('.blog-posts .thumbnail').not('.ynvXdm').pbtLazy()
                }
            })
        })
    }), $('p.comment-content').each(function () {
        let _0x74e9x2 = $(this);
        $w.on('load resize scroll', function _0x74e9x3() {
            $w.scrollTop() + $w.height() >= _0x74e9x2.offset().top && ($w.off('load resize scroll', _0x74e9x3), _0x74e9x2.replaceText(/\{image\}([^\}]*)\{\/image\}/g, '<img src="$1" alt="Comment image"/>'), _0x74e9x2.replaceText(/\{video\}([^\}]*)\{\/video\}/g, '<span class="comment-video-url">$1</span>'), _0x74e9x2.find('.comment-video-url').each(function () {
                var _0x74e9x2;
                let _0x74e9x3 = $(this),
                    _0x74e9x4 = _0x74e9x3.text(),
                    _0x74e9x5, _0x74e9x6, _0x74e9x7, _0x74e9x8;
                _0x74e9x3.replaceWith((_0x74e9x2 = _0x74e9x4, _0x74e9x5 = new URL(_0x74e9x2), _0x74e9x6 = new URLSearchParams(_0x74e9x5.search), (_0x74e9x8 = (_0x74e9x7 = !!_0x74e9x2.match('youtube.com') && _0x74e9x6.get('v')) || !!_0x74e9x2.match('youtu.be') && _0x74e9x5.pathname.replace('/', '')) ? `${''}${'<div class="comment-video yt-img" data-id="'}${''}${_0x74e9x8}${''}${'"><img width="100%" height="315" src="https://i.ytimg.com/vi/'}${''}${_0x74e9x8}${''}${'/hqdefault.jpg" alt="YouTube video thumbnail"/></div>'}${''}` : 'Error: ' + pbt.noResults))
            }), _0x74e9x2.find('.comment-video').each(function () {
                let _0x74e9x2 = $(this),
                    _0x74e9x3 = _0x74e9x2.data('id');
                _0x74e9x2.on('click', function () {
                    _0x74e9x2.replaceWith(`${''}${'<iframe width="100%" height="315" src="https://www.youtube.com/embed/'}${''}${_0x74e9x3}${''}${'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'}${''}`)
                })
            }))
        }).trigger('scroll')
    }), getStickySidebar('.main-wrap, .sidebar-wrap'), $('.luFMft').each(function () {
        let _0x74e9x2 = $(this),
            _0x74e9x3 = (_0x74e9x2.find('.widget.Text'), _0x74e9x2.find('.consent-button'));
        if (_0x74e9x2.length > 0) {
            let _0x74e9x4 = _0x74e9x3.data('title');
            _0x74e9x4 && _0x74e9x3.text(_0x74e9x4), 'true' !== Cookies.get('yNExTx') && (_0x74e9x2.css('display', 'block'), $w.on('load', function () {
                _0x74e9x2.addClass('visible')
            })), _0x74e9x3.off('click').on('click', function (_0x74e9x3) {
                _0x74e9x3.stopPropagation(), Cookies.set('yNExTx', 'true', {
                    expires: 7,
                    path: '/'
                }), _0x74e9x2.removeClass('visible'), setTimeout(function () {
                    _0x74e9x2.css('display', 'none')
                }, 500)
            })
        }
    }), $('.back-top').each(function () {
        let _0x74e9x2 = $(this);
        $w.on('scroll', function () {
            $(this).scrollTop() >= 100 ? _0x74e9x2.addClass('show') : _0x74e9x2.removeClass('show'), _0x74e9x2.offset().top >= $('.site-footer').offset().top - 36 ? _0x74e9x2.addClass('on-footer') : _0x74e9x2.removeClass('on-footer')
        }), _0x74e9x2.on('click', function () {
            $('html, body').animate({
                scrollTop: 0
            }, 500)
        })
    })
}), pbt.hasCookie && (window.cookieChoices = {})
