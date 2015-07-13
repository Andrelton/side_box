class SharesController < ApplicationController
  def index
    @shares = Share.all
    @share = Share.new
    render text: "", layout: true
  end

  def show
    render plain: params
    @shares = Share.where(path: params[:path])
  end

  def create
    @share = Share.new(share_params)
  end

  private
    def share_params
      params.reqire(:share).permit(
        :user_id, :path, :link, :title, :description
      )
    end

end
