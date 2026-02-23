import followModel from "../models/follow.model.js";

async function userFollowController(req, res) {
  try {
    const followingname = req.params.followingname;
    const followername = req.user.username;

    if (followername === followingname) {
      return res.status(400).json({
        success: false,
        message: "You cannot follow yourself",
      });
    }

    const isAlreadyFollowing = await followModel.findOne({
      follower: followername,
      following: followingname,
    });
    if (isAlreadyFollowing) {
      return res.status(200).json({
        success: true,
        message: "You are already following this user",
        isAlreadyFollowing,
      });
    }
    const follow = await followModel.create({
      follower: followername,
      following: followingname,
    });

    return res.status(200).json({
      success: true,
      message: `You are now following ${followingname}`,
      follow,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error following user",
      error: error.message,
    });
  }
}

async function userUnFollowController(req, res) {
  try {
    const followingname = req.params.followingname;
    const followername = req.user.username;

    const isUserFollowing = await followModel.findOne({
      follower: followername,
      following: followingname,
    });

    if (!isUserFollowing) {
      return res.status(200).json({
        message: `You are not following ${followingname}`,
      });
    }

    await followModel.findOneAndDelete(isUserFollowing._id);

    return res.status(200).json({
      message: `You have unfollowed ${followingname}`,
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: "An error occurred while trying to unfollow the user",
      error: error.message,
    });
  }
}

async function userAllFollowRequestsController(req, res) {
  try {
    const username = req.user.username;
    const allFollowRequests = await followModel.find({ following: username });
    if (allFollowRequests.length === 0) {
      return res.status(200).json({
        success: true,
        message: "No follow requests found",
        allFollowRequests,
      });
    }
    return res.status(200).json({
      success: true,
      message: "Follow requests fetched successfully",
      allFollowRequests,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Error fetching follow requests",
      error: error.message,
    });
  }
}

async function userAcceptFollowRequestController(req, res) {
  try {
    const requestId = req.params.requestId;
    const requestFollowStatus = req.body.followStatus;
    if (!requestId) {
      return res.status(400).json({
        success: false,
        message: "Request ID is required to accept or reject follow request",
      });
    }

    const followRequest = await followModel.findOne({
      _id: requestId,
      following: req.user.username,
    });
    if (!followRequest) {
      return res.status(404).json({
        success: false,
        message: "Follow request not found",
      });
    }
    if (requestFollowStatus === "accepted") {
      followRequest.requestStatus = "accepted";
      await followRequest.save();
      return res.status(200).json({
        success: true,
        message: "Follow request accepted",
        followRequest,
      });
    } else if (requestFollowStatus === "rejected") {
      await followModel.findByIdAndDelete(requestId);
      return res.status(200).json({
        success: true,
        message: "Follow request rejected",
      });
    } else {
      return res.status(400).json({
        success: false,
        message:
          "Invalid status. Status must be either 'accepted' or 'rejected'",
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      success: false,
      message: "Error accepting follow request",
      error: error.message,
    });
  }
}

export {
  userFollowController,
  userUnFollowController,
  userAllFollowRequestsController,
  userAcceptFollowRequestController,
};
