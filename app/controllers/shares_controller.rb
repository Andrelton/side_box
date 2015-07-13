class SharesController < ApplicationController
  def index
    @shares = Share.all
    @share = Share.new
  end

  def show
    render plain: params
    @shares = Share.where(path: params[:path])
  end

  # private

  #   def share_path
  #     @share = Share.where(path: params[:path])
  #     if @share.length == 1
  #       return @share.first
  #     else
  #       return @share
  #     end
  #   end

end
