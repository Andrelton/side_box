class SharesController < ApplicationController
  def index
    p params
    @shares = Share.order('created_at desc')
    @share = Share.new

    respond_to do |format|
      format.html { render text: "", layout: true }
      format.json { render json: @shares }
    end
  end

  def show
    p "***********in show************"
    p params[:share]
    @shares = Share.where(path: params[:share])
    p @shares
  end

  def create
    @share = Share.new(share_params)
    @share.user_id = 1
    respond_to do |format|
      if @share.save
        format.html { redirect_to shares_path }
        format.json { render json: @share }
      else
        "Error!"
      end
    end
  end

  private
    def share_params
      params.require(:share).permit(
        :user_id, :path, :link, :title, :description
      )
    end

end
