const router = require('express').Router();
const config = require('./modules/common/config');
router.use('/login', require('./modules/login'));
// router.use('/memberactivitypage', require('./modules/activity-page'));

router.use('/logout', (req, res) => {
  res.clearCookie(config.cookie.name);
  res.redirect('/');
});



router.use(require('./modules/authentication'));
// Each Module to be placed after this


router.use('/communities', require('./modules/communities'));

router.use('/community', require('./modules/community'));

router.use('/user', require('./modules/user'));

router.use('/memberactivitypage', require('./modules/activity-page'));

// router.use('/community', require('./modules/community'));

router.use('/communityRoles', require('./modules/communityRoles'));

router.use('/toolmarketplace', require('./modules/toolmarketplace'));

router.use('/communityTools', require('./modules/communityTools'));

router.use('/community', require('./modules/members'));

router.use('/community', require('./modules/tools'));

router.use('/communityMembers',require('./modules/community-member'));

router.use('/memberInvite',require('./modules/member-invite'));

router.use('/communitytemplates', require('./modules/communitytemplates'));


module.exports = router;

