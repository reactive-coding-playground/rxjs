define(['exports', 'module', '../Observable', '../scheduler/nextTick'], function (exports, module, _Observable2, _schedulerNextTick) {
    'use strict';

    module.exports = timer;

    function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

    function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

    function _inherits(subClass, superClass) { if (typeof superClass !== 'function' && superClass !== null) { throw new TypeError('Super expression must either be null or a function, not ' + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; }

    var _Observable3 = _interopRequireDefault(_Observable2);

    var _nextTick = _interopRequireDefault(_schedulerNextTick);

    var TimerObservable = (function (_Observable) {
        function TimerObservable(delay, scheduler) {
            _classCallCheck(this, TimerObservable);

            _Observable.call(this, null);
            this.delay = delay;
            this.scheduler = scheduler;
        }

        _inherits(TimerObservable, _Observable);

        TimerObservable.prototype.subscriber = function subscriber(_subscriber) {
            return this.scheduler.schedule(this.delay, _subscriber, dispatch);
        };

        return TimerObservable;
    })(_Observable3['default']);

    function dispatch(subscriber) {
        if (!subscriber.isUnsubscribed) {
            subscriber.next(0);
            subscriber.complete();
        }
    }

    function timer() {
        var delay = arguments[0] === undefined ? 0 : arguments[0];
        var scheduler = arguments[1] === undefined ? _nextTick['default'] : arguments[1];

        return new TimerObservable(delay, scheduler);
    }

    ;
});